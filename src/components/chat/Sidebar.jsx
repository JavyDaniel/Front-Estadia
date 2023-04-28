import React from 'react'
import '../../styles/Sidebar.css'
import Navbar from './Navbar';
import Contact from './Contact';
function Sidebar ({contacts,currentUser, changeChat}) {
  return (
    <div className='sidebar'>
        <Navbar currentUser={currentUser}/>
        <Contact contacts={contacts} currentUser={currentUser} changeChat={changeChat}/>
    </div>
  )
}

export default Sidebar;