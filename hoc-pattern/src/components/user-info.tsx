import * as React from "react";
import fetchResource from "./fetchResource";

const UserInfo = ({
  users,
}: {
  users: { name: string; username: string; email: string }[];
}) => {
  return (
    <>
      <h2>Users list</h2>
      {users?.map((user, indx) => {
        const { name, username, email } = user;
        return (
          <ul
            key={indx}
            style={{
              padding: "1rem",
              borderBottom: "1px solid #121212",
            }}
          >
            <li>name: {name}</li>
            <li>username: {username}</li>
            <li>email: {email}</li>
          </ul>
        );
      })}
    </>
  );
};

export default fetchResource(
  UserInfo,
  "users",
  "https://jsonplaceholder.typicode.com/users"
);
