import React from "react";
import '../styles/Post.css'



const Addpost = props => {
  return (
    <>
    <section className="way">
      <form onSubmit={props.savePost} >
        <h3 className="make"><b>AddPost</b></h3>
        <input
          type="text"
          onChange={props.savePostTitleToState}
          placeholder="Title"
          size="39"
          required
          ref={props.getTitle}
        ></input>
        <br />
        <br />
        <input
          type="text"
          onChange={props.savePostAuthorToState}
          placeholder="Author"
          size="39"
          required
          ref={props.getAuthor}
        ></input>
        <br />
        <br />
        <textarea
          onChange={props.savePostContentToState}
          placeholder="Content"
          rows="8"
          cols="41"
          required
          ref={props.getContent}
        ></textarea>
        <br />
        <br />
        <input
          type="date"
          onChange={props.savePostDateToState}
          placeholder="Date"
          size="39"
          required
          ref={props.getDate}
        ></input>
        <br />
        <br />
        <section className="button-wrapper">
        <button className="button" variant="success" active>Post</button></section>
      </form>
     
      </section>
    </>
  );
};
export default Addpost;