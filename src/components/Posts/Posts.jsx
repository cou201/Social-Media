import React, { useState, useEffect } from "react";
import "./Posts.css";
import { getPosts } from "../../Data/PostsData";
import Post from "../Post/Post";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const loadedPosts = getPosts();
    setPosts(loadedPosts);
  }, []);
  return (
    <div className="Posts">
      {" "}
      {posts.map((post, id) => (
        <Post data={post} key={id} />
      ))}{" "}
    </div>
  );
};
export default Posts;
