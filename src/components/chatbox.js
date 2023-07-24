
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function ChatBox({ userList,showChatBox,handleChatBox }) {
  
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
              <div className="list-content">
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
  export default ChatBox;