import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
// import post from "../../components/Post/Post";

export const Blog = () => {
  const [state, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map((post) => {
        return {
          ...post,
          author: "ABC",
        };
      });
      setData(updatedPosts);
      console.log(updatedPosts);
    });
  }, []); //Will work as componentDidMount
  const [selectedPost, setSelectedPost] = useState(null);
  const selectPostHandler = (id) => {
    setSelectedPost(id);
  };

  //create your Post components here and store them in an array i.e, posts
  //If you try to call map function on state.data directly in return statement, they will not render
  const posts = state.map((post) => {
    return (
      <Post
        title={post.title}
        key={post.id}
        author={post.author}
        selected={() => {
          selectPostHandler(post.id);
        }}
      />
    );
  });
  return (
    <div>
      <section className="Posts">{posts}</section>
      <section>
        <FullPost id={selectedPost} posts={state} />
      </section>
      <section>
        <NewPost />
      </section>
    </div>
  );
};

// class Blog extends Component {
//     render () {
//         return (
//             <div>
//
//             </div>
//         );
//     }
// }

export default Blog;
