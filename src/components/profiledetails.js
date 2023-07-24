import React from "react";
import "./profiledetails.css";
import MapImage from "../Screenshot 2023-07-23 121942.png";

function ProfileDetails({ user }) {
  return (
    <div className="profile-details-container">
        <div className="basic-details-container">
      <div className="basic-details">
        <div className="profile-picture">
          <img src={user.profilepicture} alt="img" className="profile-image" />
        </div>
        <h4>{user.name}</h4>
        <table>
          <tbody>
            <tr>
              <td className="label">Username:</td>
              <td className="detail">{user.username}</td>
            </tr>
            <tr>
              <td className="label">e-mail:</td>
              <td className="detail">{user.email}</td>
            </tr>
            <tr>
              <td className="label">Phone:</td>
              <td className="detail">{user.phone}</td>
            </tr>
            <tr>
              <td className="label">Website:</td>
              <td className="detail">{user.website}</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <h4>Company</h4>
        <table>
            <tbody>
                <tr>
                 <td className="label">Name:</td>
                 <td className="detail">{user.company.name}</td>
                </tr>
                <tr>
                 <td className="label">catchPhrase:</td>
                 <td className="detail">{user.company.catchPhrase}</td>
                </tr>
                <tr>
                 <td className="label">bs:</td>
                 <td className="detail">{user.company.bs}</td>
                </tr>
            </tbody>
        </table>
      </div>
     
      </div>
     
     <div className="address-container">
        <div className="address-title"><h4>Address:</h4></div>
        <table>
            <tbody>
                <tr>
                 <td className="label">Street:</td>
                 <td className="detail">{user.address.street}</td>
                </tr>
                <tr>
                 <td className="label">Suite:</td>
                 <td className="detail">{user.address.suite}</td>
                </tr>
                <tr>
                 <td className="label">City:</td>
                 <td className="detail">{user.address.city}</td>
                </tr>
                <tr>
                 <td className="label">Zipcode:</td>
                 <td className="detail">{user.address.zipcode}</td>
                </tr>  
            </tbody>
        </table>
        <div className="map-image">
         <img src={MapImage} alt="loc-img" className="location-image" /> 
         <div className="longitude-and-latitude">
         <p className="lat"><b>Lat:</b>{ user.address.geo.lat} <b>Long:</b>{user.address.geo.lng}</p>
         </div>   
         </div> 
         {/* <div className="lat-and-long">
         <p className="lat">Lat:{user.address.geo.lat}</p>
         <p>Long:{user.address.geo.lng}</p>
        
         </div> */}

     </div>
    </div>
  );
}

export default ProfileDetails;
