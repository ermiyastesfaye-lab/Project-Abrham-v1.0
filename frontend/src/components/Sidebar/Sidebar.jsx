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

const Sidebar = () => {
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

  console.log("User Role: ", userRole);

  const handleLogout = () => {
    navigate("/signin");
  };
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
        {userRole === "company" && (
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
        )}
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
        <li>
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            <button className={styles.logoutButton} onClick={handleLogout}>
              <LogOut className={styles.icon} />
              <span>Log out</span>
            </button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
