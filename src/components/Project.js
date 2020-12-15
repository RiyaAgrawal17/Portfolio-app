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
      <p>{description}</p><br />
      <a href={link} className="btn">Check here</a>
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