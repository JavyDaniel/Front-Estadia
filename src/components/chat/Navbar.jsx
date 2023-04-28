import React, { useEffect, useState } from "react";
import '../../styles/NavbarChat.css'
import user from '../../images/user.png'
function Navbar({ currentUser }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  useEffect(() => {
    if (currentUser) {
      setCurrentUserName(currentUser.data.username);
    }
  }, [currentUser]);
  return (
    <div className="navbar2">
      <span className="logo">Chat de Dudas</span>
      <div className="user">
        <img src={user} alt="" />
        <span className="logo">{currentUserName}</span>
      </div>
    </div>
  );
}

export default Navbar;
