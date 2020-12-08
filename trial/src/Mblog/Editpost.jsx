import React from "react";


const Editpost = (props) => {
  return (
    <><section className="create-post">
      <form>
        <h1>Modify Post</h1>
        <input type='text'
          defaultValue={props.title}
          onChange={props.savePostTitleToState}
          text
          placeholder="title"
          size="39"
        ></input>
        <br />
        <br />
        <input type='text'
          defaultValue={props.title}
          onChange={props.savePostTitleToState}
          text
          placeholder="author"
          size="39"
        ></input>
        <br />
        <br />
        <textarea
          defaultValue={props.content}
          placeholder="content"
          onChange={props.savePostContentToState}
          rows="8"
          cols="41"
        ></textarea>
        <br />
        <br />
        <input type='Date'
          defaultValue={props.title}
          onChange={props.savePostTitleToState}
          text
          placeholder="date"
          size="39"
        ></input>
        <br />
        <br />
        <section className="button-wrapper">
        <button className="button" onClick ={props.updatePost}>Update</button>
        </section>
      </form>
      </section>
    </>
  );
};
export default Editpost;
