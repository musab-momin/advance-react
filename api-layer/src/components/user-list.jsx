import React, { useEffect } from "react";
import useFetchUser from "../hooks/useFetchUser";
import LazyRender from "./lazy-render";

const UserList = () => {
  const {
    data: { users, status, errorMssg },
    initFetchUsers,
  } = useFetchUser();

  useEffect(() => {
    initFetchUsers();
  }, []);

  if (status === "ERROR") {
    return (
      <p>
        An error occured <br /> {errorMssg}
      </p>
    );
  }

  return (
    <div className="container">
      <ul className="container">
        <li className="p-16">
          <button
            type="button"
            className="btn"
            onClick={() => initFetchUsers()}
          >
            Fetch users
          </button>
        </li>
        <LazyRender renderLazy={status === "PENDING"} delay={800}>
          {users.map((user, _indx) => (
            <li key={user.id} className="p-16">
              id: {user.id}, name: {user.name}, username: {user.username},
              email: {user.emaile}
            </li>
          ))}
        </LazyRender>
      </ul>
    </div>
  );
};

export default UserList;
