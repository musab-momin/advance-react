import API from "./base";

const fetchUsers = () => {
  return API.get("users");
};

export default fetchUsers;
