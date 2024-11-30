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

export const editCompany = async (updatedCompany) => {
  const response = await axios.patch(
    "http://localhost:5000/api/companies",
    updatedCompany,
    {
      withCredentials: true,
    }
  );
};

export const getCompanies = async () => {
  const response = await axios.get("http://localhost:5000/api/companies", {
    withCredentials: true,
  });
  return response;
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
