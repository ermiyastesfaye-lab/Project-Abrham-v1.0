import React from "react";
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

const Sidebar = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/dashboard/profile");
  };

  const handleMeClick = () => {
    navigate("/dashboard/me");
  };

  return (
    <nav className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoCircle}></div>
        <span>Logo</span>
      </div>

      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
            onClick={handleProfileClick}
          >
            <Home className={styles.icon} />
            <span>Profile</span>
          </NavLink>
        </li>
        <li>
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
        <li>
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
        <li>
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
        <li>
          <NavLink
            to="/dashboard/me"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
            onClick={handleMeClick}
          >
            <User className={styles.icon} />
            <span>Me</span>
          </NavLink>
        </li>
      </ul>

      <button className={styles.logoutButton}>
        <LogOut className={styles.icon} />
        <span>Log out</span>
      </button>
    </nav>
  );
};

export default Sidebar;
