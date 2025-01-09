import React, { useEffect, useState } from "react";
import "./adminUsers.css";
import { getUsers } from "../../api/user";
import AdminSidebar from "../adminSidebar/AdminSidebar";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
      } catch (err) {
        setError("Failed to fetch users. Please try again.");
        console.error("Error fetching users: ", err);
      }
    };

    fetchUsers();
  }, []);
  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div>
      <AdminSidebar />
      <div className="container">
        {users.map((user, index) => (
          <div className="card" key={index}>
            <img src={user.imgUrl} alt={user.email} className="card-img" />
            <h3 className="card-title">{user.userName}</h3>
            <h3 className="card-title">{user.email}</h3>
            <p className="card-description">{user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUsers;
