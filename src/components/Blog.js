import React from "react";
import { BlogList } from "./Profiledata";
function Blog() {
  return (
    <main>
      <div className="blog">
        <h1>Here are some of the writings on my journey ✍️</h1>
        <center>
        <div className="column">
        {
        BlogList.map(blog=>{
      const {link,name} = blog;
      return (
        <div className = "card">
        <h2>
          <a href={link} style={{color: "#1D4350"}}>
            {name}
          </a>
        </h2>
        </div>
        
       )
      })
    }
    </div>
    </center>
      </div>
    </main>
  );
}

export default Blog;
