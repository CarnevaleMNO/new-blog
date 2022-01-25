import React from "react";

export default function PostCard({ post }) {
  return (
    <div>
      {post.node.title}
      <br></br>
      {post.node.excerpt}
    </div>
  );
}
