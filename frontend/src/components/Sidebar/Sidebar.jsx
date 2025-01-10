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
import styles from "./Sidebar.module.css";
import { getUser } from "../../api/user";
import { useCookies } from "react-cookie";
import logo from "../../assets/logoImage/logo.png";

const Sidebar = () => {
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();
  const [cookie] = useCookies(["userId"]);

  useEffect(() => {
    const fetchUser = async () => {
      const userId = cookie.userId;
      if (userId) {
        const res = await getUser(userId);
        setUserRole(res.data.role);
      }
    };
    fetchUser();
  }, [cookie.userId]);

  const handleLogout = () => {
    navigate("/signin");
  };

  return (
    <nav className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" className={styles.logoImage} />
      </div>

      <ul className={styles.navList}>
        {userRole === "company" && (
          <li className={styles.navItem}>
            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              <Home className={styles.icon} />
              <span>Profile</span>
            </NavLink>
          </li>
        )}
        <li className={styles.navItem}>
          <NavLink
            to="/listings"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            <List className={styles.icon} />
            <span>Listings</span>
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/messages"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            <MessageSquare className={styles.icon} />
            <span>Messages</span>
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            <Mail className={styles.icon} />
            <span>Contact Us</span>
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/dashboard/me"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            <User className={styles.icon} />
            <span>Me</span>
          </NavLink>
        </li>
      </ul>

      <button className={styles.logoutButton} onClick={handleLogout}>
        <LogOut className={styles.icon} />
        <span>Log out</span>
      </button>
    </nav>
  );
};

export default Sidebar;
