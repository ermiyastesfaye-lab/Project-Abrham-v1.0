import axios from "axios";

export const editUser = async (userId, updatedUser) => {
  const response = await axios.patch(
    `http://localhost:5000/api/users/${userId}`,
    updatedUser,
    {
      withCredentials: true,
    }
  );
};

export const getUsers = async () => {
  const response = await axios.get(`http://localhost:5000/api/users`, {
    withCredentials: true,
  });
  console.log("Response users:", response);
  return response.data;
};

export const getUser = async (userId) => {
  const response = await axios.get(
    `http://localhost:5000/api/users/${userId}`,
    {
      withCredentials: true,
    }
  );
  return response;
};

export const deleteUser = async (userId) => {
  const response = await axios.delete(
    `http://localhost:5000/api/users/${userId}`,
    {
      withCredentials: true,
    }
  );
};
