import React from "react";
import { contactList } from "./Profiledata";
import gmail from "../img/maili.png";
import twit from "../img/twitter.png";
import link from "../img/li.png";
import git from "../img/git.png";
function Contact() {
  return (
    
      <div className="contact">
        {contactList.map((data) => {
          const { email, twitter, linkedin, github } = data;
          return (
            <center>
              <div style={{marginTop : "20px", marginRight:"30px"}}>
              <a href={email}><img src={gmail} height="50px" width="50px" alt="Gmail" /></a>
              <a href={twitter}><img src={twit} height="50px" width="50px" alt="Twitter" /></a>
              <a href={linkedin}><img src={link} height="50px" width="50px" alt="LinkedIn" /></a>
              <a href={github}><img src={git} height="50px" width="50px" alt="GitHub" /></a>
              </div>
            </center>
          );
        })}
      </div>
  
  );
}

export default Contact;