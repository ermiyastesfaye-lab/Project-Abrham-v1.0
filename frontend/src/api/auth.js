import axios from "axios";
export const signup = async (user) => {
  const response = await axios.post("http://localhost:5000/api/signup", user, {
    withCredentials: true,
  });
  return response.data;
};

export const login = async (user) => {
  const response = await axios.post("http://localhost:5000/api/login", user, {
    withCredentials: true,
  });
  return response.data;
};
