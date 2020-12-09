import React, { useState, useRef } from "react";
import Addpost from "./Addpost";
import Post from "./Post";
import Editpost from "./Editpost"



const Allpost = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  const [isModifyPost, setIsModifyPost] = useState(false);
  const [editPostId, setEditPostId] = useState("");

  // Initialize useRef
  const getTitle = useRef();
  const getAuthor=useRef();
  const getContent = useRef();
  const getDate=useRef();
  

  const savePostTitleToState = event => {
    setTitle(event.target.value);
  };
  const savePostAuthorToState = event => {
    setContent(event.target.value);
  };
  const savePostContentToState = event => {
    setTitle(event.target.value);
  };
  const savePostDateToState = event => {
    setContent(event.target.value);
  };
  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost);
  };
  const toggleModifyPostComponent = () => {
    setIsModifyPost(!isModifyPost)
  }
  const editPost = id => {
    setEditPostId(id);
    console.log(id)
    toggleModifyPostComponent();
  };
  const deletePost = id => {
    const modifiedPost = allPosts.filter(eachPost => {
      return eachPost.id !== id;
    });
    setAllPosts(modifiedPost);
  };
  const updatePost = (event) => {
    event.preventDefault();
    const updatedPost = allPosts.map(eachPost => {
      if (eachPost.id === editPostId) {
        console.log([eachPost.id, editPostId] )
        return {
          ...eachPost,
          title: title || eachPost.title,
          author: author || eachPost.author,
          content: content || eachPost.content,
          date: date || eachPost.date
        };
      }
      console.log(eachPost)
      return eachPost;
    });
    setAllPosts(updatedPost);
    toggleModifyPostComponent();
  };
  const savePost = event => {
    event.preventDefault();
    const id = Date.now();
    setAllPosts([...allPosts, { title, author, content,date, id }]);
    console.log(allPosts);
    setTitle("");
    setAuthor("");
    setContent("");
    setDate("");
    getTitle.current.value = "";
    getAuthor.current.value = "";
    getContent.current.value = "";
    getDate.current.value = "";
    toggleCreateNewPost();
  };
  if (isCreateNewPost) {
    return (
      <>
        <Addpost
          savePostTitleToState={savePostTitleToState}
          savePostAuthorToState={savePostAuthorToState}
          savePostContentToState={savePostContentToState}
          savePostDateToState={savePostDateToState}
          getTitle={getTitle}
          getAuthor={getAuthor}
          getContent={getContent}
          getDate={getDate}
          savePost={savePost}
          deletePost={deletePost}
        />
      </>
    );
  }
  else if (isModifyPost) {
    const post = allPosts.find(post => {
      return post.id === editPostId;
    });
    return (
      <Editpost
        title={post.title}
        author={post.author}
        content={post.content}
        date={post.date}
        updatePost={updatePost}
        savePostTitleToState={savePostTitleToState}
        savePostAuthorToState={savePostAuthorToState}
        savePostContentToState={savePostContentToState}
        savePostDateToState={savePostDateToState}
      />
    );
  }
  return (
    <>
      {!allPosts.length ? (
        <section className="no-post" style={{color:"darkblue"}}>
          <h1>Welcome to Triumph Travels Blogpage</h1>
          <h3>There is nothing to see here.You can create a new post by clicking the new button</h3>
          <br />
      <br />
          <section className="button-wrapper">
      <button onClick={toggleCreateNewPost} className="button" variant="success"  size="lg" active>New</button>
      </section>
        </section>
      ) : (
      <div><h1>All Posts</h1>
        <section className="all-post">
        {allPosts.map(eachPost => {
          return (
            <Post
              id={eachPost.id}
              key={eachPost.id}
              title={eachPost.title}
              author={eachPost.author}
              content={eachPost.content}
              date={eachPost.date}
              editPost={editPost}
              deletePost={deletePost}
            />
          );
        })}
      <section className="button-wrapper">
      <button onClick={toggleCreateNewPost} className="button">Create New</button>
      </section>
        </section>
        
        </div>
      )}
      
    </>
  );
};
export default Allpost;