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
