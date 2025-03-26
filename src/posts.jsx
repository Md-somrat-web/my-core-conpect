import { use } from "react";
import Posts from "./posts";
import Post from "./post";

export default function posts({ PostPromised }) {
  const posts = use(PostPromised);
  console.log(posts);
  return (
    <div className="card">
      <h3>Post Are Hear : {posts.length}</h3>
      {}
    </div>
  );
}
