import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { getUsers } from "../utils/Controller";
import "../styles/chat.css";
// import Contact from "../components/chat/Contact";
import Welcome from "../components/chat/Welcome";
import ChatContainer from "../components/chat/ChatContainer";
import axios from "axios";
import "../styles/chat.css";
import Sidebar from "../components/chat/Sidebar";
import { host } from "../utils/APIRoutes";
import { io } from "socket.io-client";

// const urlAPIGet = 'http://localhost/user/chatUsers/USER'
function Chat() {
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    async function hola() {
      if (!localStorage.getItem("user")) {
        navigate("/login");
      } else {
        setCurrentUser(await JSON.parse(localStorage.getItem("user")));
      }
    }
    hola();
  }, []);

  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUser.data._id);
      console.log(socket.current)
    }
  }, [currentUser]);
  useEffect(() => {
    // console.log(currentUser)

    if (currentUser) {
      axios
        .get(`http://localhost:4000/user/chatUsers/${currentUser.data.rol}`)
        .then((response) => {
          setContacts(response.data);
        });
    }
  }, [currentUser]);

  // React.useEffect(() => {
  //   axios.get("http://localhost:4000/user/chatUsers/USER").then((response) => {
  //     setContacts(response.data);
  //   });
  // }, []);

  // useEffect(() => {

  //   async function us(){
  //     if (currentUser) {
  //       const data = await axios.get(`http://localhost:4000/user/chatUsers/USER`);
  //       setContacts(data.data);
  //       console.log(contacts)
  //    }
  //   }

  //   us();

  // }, [currentUser, contacts]);
  // const handleChatChange = (chat) => {
  //   setCurrentChat(chat);
  // };

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  return (
    <div>
      <div className="chat">
        <div className="container2">
          <Sidebar
            contacts={contacts}
            currentUser={currentUser}
            changeChat={handleChatChange}
          />
          {currentChat === undefined ? (
            <Welcome currentUser={currentUser} />
          ) : (
            <ChatContainer
              currentChat={currentChat}
              currentUser={currentUser}
              socket={socket}
            />
          )}
        </div>
        {/* <Contact contacts={contacts} currentUser={currentUser} changeChat={handleChatChange} /> */}
      </div>
    </div>
  );
}

export default Chat;
