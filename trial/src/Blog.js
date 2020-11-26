import React, {useState} from 'react';
import {v1 as vvid} from "vvid";
import {Form} from 'react-bootstrap';
import "./Form.css";


function Blog(){
    const [title, setTitle]= useState("");
    const [author, setAuthor]= useState("");
    const [content, setContent]= useState("");
    const [post, setPost]= useState("");
    
    const handleTitle = (event) =>{
        setTitle(event.target.value);
    };
    const handleAuthor = (event) =>{
        setAuthor(event.target.value);
    };
    const handleContent = (event) =>{
        setContent(event.target.value);
    };
    const handlePost = (event) =>{
        event.preventDefault();
        setPost([
            ...post,
            {
                id:vvid(),
                title:title(),
                content:content(),
                author:author(),
            }
        ]);
        setAuthor("");
        setTitle("");
        setContent("");
    };
    
    return( 
        <div>
            <h1>Welcome to Triumph travels blog</h1>
            <h3> Here we talk about the various tours people have been to and other exciting tours yet to be visited</h3>

            <Form>
                <Form.Group className="auth" value={title} onChange={handleTitle}>
                  <Form.Label className="index">Title</Form.Label>
                </Form.Group>
              
                <Form.Group className="auth" value={author} onChange={(e) => handleAuthor(e)}>
                  <Form.Label className="index">Author</Form.Label>
                </Form.Group>
                <Form.Group className="auth" value={content} onChange={(e) => handleContent(e)}>
                  <Form.Label className="index">Author</Form.Label>
                </Form.Group>
                <Form.Group className="auth" type="submit" onClick={handlePost}>
                </Form.Group>
            </Form>

            <ul>
                {post.map((post) => (
                    <li key={post.id}></li>
                    {post.title} {post.author} {post.content}
                ))}
            </ul>

        </div>
    );
}

export default Blog;