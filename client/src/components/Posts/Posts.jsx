import React from "react";
import PostsData from "../Data/PostData";
import Post from "../Post/Post";
import "./Posts.css";
const Posts = () => {
  return (
    <div className="Posts">
      {PostsData.map((post, id) => {
        return <Post key={id} data={post} id={id} />;
      })}
    </div>
  );
};

export default Posts;
