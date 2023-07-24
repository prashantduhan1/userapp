import "./UserAccountList.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function UserAccountList(){
    const navigate=useNavigate();
    const[userList,setUserList]=useState([]);
    useEffect(()=>{
        performAPiCall();
    },[])
    const performAPiCall = async () => {
        try {
          let result = await axios.get("https://panorbit.in/api/users.json");
          console.log(result.data)
          setUserList(result.data.users); // Assuming the API response has a 'users' property containing the user list
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

    return(
        <div className="landing-page">
        <div className="box">
          <h1 className="title">Select an account</h1>
          <div className="user-list-container">
            <div className="user-list">
              {userList.map((user,index) => (
                <div key={index}>
                  <div className="list-content" onClick={()=>navigate("/profile", { state: { user,userList } })}>
                    <div className="profile-icon">
                    <img src={user.profilepicture} alt="profile"></img>
                    </div>
                    <p className="user-name">{user.name}</p>
                   
                  </div>
                  {/* <hr /> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}
export default UserAccountList;