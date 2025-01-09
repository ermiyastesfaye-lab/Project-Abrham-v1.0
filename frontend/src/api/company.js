import axios from "axios";

export const postCompany = async (company) => {
  const response = await axios.post(
    "http://localhost:5000/api/companies",
    company,
    {
      withCredentials: true,
    }
  );
};

export const editCompany = async (updatedCompany, id) => {
  const response = await axios.patch(
    `http://localhost:5000/api/companies/userId/${id}`,
    updatedCompany,
    {
      withCredentials: true,
    }
  );
  return response;
};

export const getCompanies = async () => {
  const response = await axios.get("http://localhost:5000/api/companies", {
    withCredentials: true,
  });
  return response.data;
};

export const getCompany = async (id) => {
  const response = await axios.get(
    `http://localhost:5000/api/companies/userId/${id}`,
    {
      withCredentials: true,
    }
  );
  return response;
};
