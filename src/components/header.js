import React, { useState } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

function Header({ user,userList,selectedSection }) {
  const navigate=useNavigate();
  const [displayProfile, setDisplayProfile] = useState(false);

  userList=userList.filter((a)=>a.name!==user.name);
  userList=userList.slice(0,2)
  const handleImageAndNameClick = () => {
    setDisplayProfile((prevState) => !prevState);
  };

  const handleSignOutClick = () => {
    console.log("will signout")
    navigate("/");
  };

  return (
    <div className="header-content">
      <p className="profile-heading">{selectedSection}</p>
      <div className="image-and-name" onClick={handleImageAndNameClick}>
        <div className="image-icon">
          <img src={user.profilepicture} alt="imag"></img>
        </div>
        <p className="profile-heading">{user.name}</p>
      </div>
      {
        displayProfile &&  (
      <div className="dropdown-menu">
      <div className="image-icon-dropdown">
          <img src={user.profilepicture} alt="image"></img>
       </div> <p><b>{user.name}</b><br></br>{user.email}</p><br></br>
         {userList.map((user,index)=>
        <div className="list-content" key={index}>
        <div className="profile-icon">
        <img src={user.profilepicture} alt="profile"></img>
        </div>
        <p className="dropdown-font">{user.name}</p>
      </div>  )
         }    
          <button className="button" onClick={()=>handleSignOutClick()}><b>Sign out</b></button>
      </div>
)}
    </div>
  );
}
function DropdownItem(props){
    return(
      <li className = 'dropdownItem'>
        <a> {props.text} </a>
      </li>
    );
  }

export default Header;
