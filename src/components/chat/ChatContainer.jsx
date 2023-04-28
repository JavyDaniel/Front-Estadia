import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import axios from "axios";
import { sendM, getM } from "../../utils/APIRoutes";
import { v4 as uuidv4 } from "uuid";
import '../../styles/ChatContainer.css'
import user from '../../images/user.png'
function ChatContainer({ currentChat, currentUser, socket }) {
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();
  const handleSendMsg = async (msg) => {
    console.log(currentChat._id);

    socket.current.emit("send-msg", {
      to: currentChat._id,
      from: currentUser.data._id,
      msg,
    });
    
    await axios.post(sendM, {
      from: currentUser.data._id,
      to: currentChat._id,
      messages: msg,
    });

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };

  useEffect(() => {
    console.log(currentUser.data._id)
    console.log(currentChat._id)

    axios
      .post(getM, {
        from: currentUser.data._id,
        to: currentChat._id,
      })
      .then((response) => {
        setMessages(response.data);
        
      });
  }, [currentChat, currentUser]);

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Container className="chat-full">
      <div className="chat-header">
          <div className="avatar">
            <img src={user} alt="avatar" />
          </div>
          <h3>{currentChat.username}</h3>
          <div className="chatIcons">
          <img src='images/cam.png' alt="" />
          <img src='images/add.png' alt="" />
          <img src='images/more.png' alt="" />
        </div>
      </div>
      <div className="chat-messages">
        {messages.map((message) => {
          return (
            <div ref={scrollRef} key={uuidv4()}>
              <div
                className={`message ${
                  message.fromSelf ? "sended" : "recieved"
                }`}
              >
                <div className="content">
                  <p>{message.message}</p>
                </div>
              </div>
            </div>
          );
        })}
        
      </div>
      <ChatInput handleSendMsg={handleSendMsg} />
    </Container>
  );
}
const Container = styled.div`
 
    .sended {
      justify-content: flex-end;
     
      .content {
        background-color: #000000;
        border-radius: 12px 12px 0px 12px;
      }
    }
    .recieved {
      justify-content: flex-start;
      .content {
        background-color: blue;
        border-radius: 0px 12px 12px 12px;
      }
    }
  }
`;
export default ChatContainer;
