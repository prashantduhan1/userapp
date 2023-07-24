import { useState } from "react";
import "./Profile.css";
import { useLocation } from "react-router-dom";
import Header from "./header";
import Comingsoon from "./comingsoon";
import ProfileDetails from "./profiledetails";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ChatComponent from "./chatcomponent";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';


function ChatBox({ userList,showChatBox,handleChatBox ,handleChatWithUser,handleShowPersonalChatBox}) {
  
  return (
    <div className="sticky-chat-bar">
    <div className="chat-bar-header">
                <div className="chatbar-content">
                    <div className="icon-and-chat">
                    <div><ChatBubbleOutlineIcon /></div>
                    <div> Chats</div>
                    </div>
                    <div className="up-arrow" onClick={() => handleChatBox(!showChatBox)}><KeyboardArrowDownIcon className="uparrow" /></div>
                </div>                       
    </div>
    <div className="chat-users">
        <div className="chat-user-innerbox">
          {userList.map((user,index) => (
            <div key={index}>
            <div className="list-content" onClick={()=>{handleChatWithUser(user); handleShowPersonalChatBox(true);}}>
              <div className="profile-icon">
              <img src={user.profilepicture} alt="profile"></img>
              </div>
              <p className="user-name">{user.name}</p>
             
            </div>
          </div>
          ))}
          </div>
       </div>
    </div>
  );
}
function PersonalChatBox({user,handleShowPersonalChatBox}){
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const handleSendMessage=(message)=>{
      let oldMessages=[...messages];
      oldMessages.push(message);
      setMessages(oldMessages);
      console.log(messages)
  }
  return(
    <div className="personal-chat-outer-box">
          <div className="personal-chat-bar-header">
                <div className="personal-chatbar-content">
                    <div className="icon-and-name">   
                    <div className="personal-chat-profile-icon">
                    <img src={user.profilepicture} alt="profile"></img>
                    </div>
                    <div className="personal-chat-username"> {user.name}</div>
                    </div>
                    <div className="up-arrow" onClick={()=>handleShowPersonalChatBox(false)}><CloseIcon className="uparrow" /></div>
                </div>     

          </div>
          <div className="message-history">
          {messages.map((message,index) => (
          <div key={index} style={{ padding: '8px' }}>
            <strong>You:</strong> {message}
          </div>
        ))}
          </div> 

          <div className="message-body">
            <textarea className="message-input" placeholder="Type here to start a conversation" onChange={(e)=>setMessageInput(e.target.value)}></textarea>
            <button className="send-button" onClick={()=>handleSendMessage(messageInput)}><SendIcon /></button>
          </div> 

    </div>
  )
}

  
function Profile(){
        const sections=['Profile','Posts','Gallery','ToDo']
        const[selectedSection,setSelectedSection]=useState('Profile');
        const location = useLocation();
        const user = location.state.user;
        const userList=location.state.userList;
         const [showChatBox, setShowChatBox] = useState(false);
         const [showPersonalChatBox,setShowPersonalChatBox]=useState(false);
         const [chatWithUser,setChatWithUser]=useState({});

     const handleChatBox=(e)=>{
      setShowChatBox(e);
     }    
     const handleShowPersonalChatBox=(e)=>{
      setShowPersonalChatBox(e);
     }
     const handleChatWithUser=(e)=>{
      setChatWithUser(e);
     }
    return(
        <div>
           <div className="content">
              <div className="side-navigation">
                    <div className="section-list">
                        { sections.map((section,index)=>(
                            <div className="section-list-content" key={index}>
                                <div className="title-and-arrow" onClick={()=>setSelectedSection(section)}>
                                <h4>{section}</h4>
                                {(selectedSection===section)?<p className="arrow">{">"}</p>:""}
                                </div> 
                             {(index!=3)?<hr></hr>:""}
                            </div>
                        ))
                        }                  
                    </div>
              </div>
              <div className="content-detail">
                <div className="header">
               <Header user={location.state.user} userList={location.state.userList} selectedSection={selectedSection} />
               <hr></hr>
               </div>
               {
                (selectedSection==='Profile')?<div className="profile-details"><ProfileDetails user={location.state.user} /></div>:""
               }         

               {(selectedSection==='Posts' || selectedSection==='Gallery' || selectedSection==='ToDo')?
                <div className="coming-soon">
                    <Comingsoon />
                </div>:""}
              </div>
             
              {(showChatBox==false)?   <div className="sticky-bar">
                <div className="chatbar-content">
                    <div className="icon-and-chat">
                    <div><ChatBubbleOutlineIcon /></div>
                    <div> Chats</div>
                    </div>
                    <div className="up-arrow"  onClick={() => setShowChatBox(!showChatBox)}><KeyboardArrowUpIcon className="uparrow" /></div>
                </div>                       
              </div> :""}
            
              <div>
                {(showChatBox==true)?<ChatBox userList={location.state.userList} handleChatWithUser={handleChatWithUser} showChatBox={showChatBox} handleChatBox={handleChatBox} handleShowPersonalChatBox={handleShowPersonalChatBox}/>:""}
                </div> 

              
               {(showPersonalChatBox)? <div className="personal-chat"><PersonalChatBox user={chatWithUser} handleShowPersonalChatBox={handleShowPersonalChatBox}/> </div> :""} 
               
               
                 
           </div>
           </div>

      
    )
}
export default Profile;

