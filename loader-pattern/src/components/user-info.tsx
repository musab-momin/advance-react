import * as React from "react";

const UserInfo = ({
  users,
}: {
  users?: { name: string; username: string; email: string }[];
}) => {
  return (
    <div>
      <h2>Users: {`>>>`}</h2>
      {users?.map((el, indx) => {
        const { name, username, email } = el || {};
        return (
          <ul
            key={indx}
            style={{ padding: "1rem", borderBottom: "1px solid #121212" }}
          >
            <li>name: {name}</li>
            <li>usernam: {username}</li>
            <li>email: {email}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default UserInfo;
