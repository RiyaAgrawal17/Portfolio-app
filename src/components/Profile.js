import React from "react";
import { ProfileList } from "./Profiledata";

function Profile() {
  return (
    <main>
      <div>
        {ProfileList.map((data) => {
          const { alt, image, name, profile } = data;
          return (
            <center>
              <img 
                 style={{height: "300px",
                 width: "300px",
                 borderRadius: "90%",
                 border: "3px solid #1D4350",
                 marginTop:"50px"}} 
              alt={alt} src={image}>
              </img>
              
              <h1 style={{color: "#1D4350", fontFamily: "Cursive"}}>{name}</h1>
              <h2 style={{color: "#1D4350", fontFamily: "Cursive"}}>{profile}</h2>
            </center>
          );
        })}
      </div>
    </main>
  );
}

export default Profile;
