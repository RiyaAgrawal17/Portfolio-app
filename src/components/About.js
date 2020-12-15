import React from "react";
import { AboutList,SkillList } from "./Profiledata";

function About() {
  return (
    <main>
      <div className="about">
        <h1>Who am I? 😎</h1>
        <div className="row">
        {
    AboutList.map(education=>{
      const {name,des} = education;
      return (
        <center><div className="column">
          <h5 
          style={{ fontSize: "30px", marginBottom: "10px", fontFamily: "fantasy"}}>
        {des}</h5>
     <p style={{ fontSize: "20px" , color: "black"}}>
        {name}
      </p>
  </div>
<br />
  🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅🪅
  <h1 style={{ marginTop: "20px"}}>Some of my tech Skills 👩‍💻</h1>
  <div className="row">
  
        {
    SkillList.map(skill=>{
      const {image,alt} = skill;
      return (
        <div className="card">
        <img alt={alt} src={image} className="pic"></img>
        </div>
     )
    })
    }
   
    </div>
  </center>
   )
  })
}
        </div>
      </div>
    </main>
  );
}

export default About;
