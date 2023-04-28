import React, { useState } from "react";
import '../../styles/Input.css'

function ChatInput({handleSendMsg}) {
  const [msg, setMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (event, emoji) => {
    console.log(emoji)
    let message = msg;
    message += emoji.emoji;
    setMsg(message);
  };

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  return (
    <div className="input-container">
      {/* <form  onSubmit={(event) => sendChat(event)}> */}
        <input
          type="text"
          placeholder="type your message here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button type="submit" onClick={(event)=> sendChat(event)}>
        Enviar</button>
      {/* </form> */}
    </div>
  );
}




export default ChatInput