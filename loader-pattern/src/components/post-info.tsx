import * as React from "react";

const PostInfo = ({ posts }: { posts?: [] }) => {
  return (
    <div>
      <h2>POSTS: {`>>>`}</h2>
      {posts?.map((el, indx) => {
        const { userId, title, body } = el || {};
        return (
          <ul
            key={indx}
            style={{ padding: "1rem", borderBottom: "1px solid #121212" }}
          >
            <li>user id: {userId}</li>
            <li>title: {title}</li>
            <li>body: {body}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default PostInfo;
