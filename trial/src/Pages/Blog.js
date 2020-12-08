import React from "react";
import Allpost from "../Mblog/Allpost";
import Votes from './Votes'
import '../styles/Post.css'


const Blog = ( ) => {
  return (
    <div className="face">
      <center>
      <Allpost />
      <Votes/>
      </center>

    </div>
  );
};
export default Blog;