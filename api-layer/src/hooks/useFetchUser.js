import { useState } from "react";
import fetchUsers from "../apis/user-actions";
import withAsync from "../utils/with-async";
import { apiStatus } from "../utils/constants";

const useFetchUser = () => {
  const [data, setData] = useState({
    users: [],
    status: apiStatus.IDLE,
    errorMssg: "",
  });

  const initFetchUsers = async () => {
    setData((prev) => ({ ...prev, status: apiStatus.PEDING }));
    const { response, error } = await withAsync(fetchUsers);

    if (response) {
      setData((prev) => ({
        ...prev,
        users: response,
        status: apiStatus.SUCCESS,
      }));
    } else {
      setData((prev) => ({
        ...prev,
        status: apiStatus.ERROR,
        errorMssg: error.message,
      }));
    }
  };

  return { initFetchUsers, data: data };
};

export default useFetchUser;
