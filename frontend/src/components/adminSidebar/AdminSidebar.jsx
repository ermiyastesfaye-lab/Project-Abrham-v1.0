import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  User,
  FileText,
  List,
  MessageSquare,
  Mail,
  LogOut,
  Home,
} from "react-feather";
import styles from "../Sidebar/Sidebar.module.css";
import { getUser } from "../../api/user";
import { useCookies } from "react-cookie";

const AdminSidebar = () => {
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();
  const [cookie] = useCookies(["userId"]);

  useEffect(() => {
    const fetchUser = async () => {
      const userId = cookie.userId;
      if (userId) {
        const res = await getUser(userId);
        console.log(res);
        setUserRole(res.data.role);
      }
    };
    fetchUser();
  }, []);

  return (
    <nav className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoCircle}></div>
        <span>Logo</span>
      </div>

      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/adminusers"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            <Home className={styles.icon} />
            <span>User</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admincompanies"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            <List className={styles.icon} />
            <span>Companies</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AdminSidebar;
