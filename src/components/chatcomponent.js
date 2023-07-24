
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function ChatComponent(){

    return(
        <div>
                <div className="chatbar-content">
                    <div className="icon-and-chat">
                    <div><ChatBubbleOutlineIcon /></div>
                    <div> Chats</div>
                    </div>
                    <div className="up-arrow"><KeyboardArrowUpIcon className="uparrow" /></div>
                </div>
        </div> 
    )
}
export default ChatComponent;