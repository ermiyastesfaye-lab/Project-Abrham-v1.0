import React, { useEffect, useState } from "react";
import { getCompanies } from "../../api/company";
import "./adminCompanies.css";
import AdminSidebar from "../adminSidebar/AdminSidebar";

const AdminCompanies = () => {
  return (
    <div>
      <AdminSidebar />
      <AdminCompany />
    </div>
  );
};

const AdminCompany = () => {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const company = await getCompanies();
        setCompanies(company);
      } catch (err) {
        setError("Failed to fetch companies. Please try again.");
        console.error("Error fetching companies: ", err);
      }
    };

    fetchUsers();
  }, []);
  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="container">
      {companies.map((company, index) => (
        <div className="card" key={index}>
          <img src={company.imgUrl} alt={company.name} className="card-img" />
          <h3 className="card-title">{company.name}</h3>
          <h3 className="card-title">{company.country}</h3>
          <p className="card-description">{company.city}</p>
        </div>
      ))}
    </div>
  );
};
export default AdminCompanies;
