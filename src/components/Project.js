import React from "react";
import { ProjectList } from "./Profiledata";
const Project = () => {
  return (
    <main>
      <center>
    <div className="project">
    <h1>Have a look on some of my projects &#128165;</h1>
    <div>
      {
    ProjectList.map(project=>{
      const {link,description,name} = project;
      return (
    <div className="column card">
      <h3>{name}</h3>
      <h6 style={{fontSize: "15px"}}>{description}</h6><br />
      <a href={link} className="btn">Check</a>
      </div>
      )
    })
  }
    </div>
   </div>
   </center>
  </main>
)
  };

export default Project;