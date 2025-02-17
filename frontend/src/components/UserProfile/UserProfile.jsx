import React, { useState } from "react";
import { Edit } from "lucide-react";
import styles from "./UserProfile.module.css";
import { deleteUser, editUser } from "../../api/user";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";

const UserProfile = () => {
  const [cookies] = useCookies();
  const userId = cookies.userId;

  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [isEditing, setIsEditing] = useState({
    userName: false,
    email: false,
    password: false,
  });

  const handleChange = (e, field) => {
    const { value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleEdit = (field) => {
    setIsEditing((prevState) => ({
      ...prevState,
      [field]: true,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const updatedUser = {};
    for (const key in userData) {
      if (userData[key]) updatedUser[key] = userData[key];
    }
    try {
      const res = await editUser(userId, updatedUser);
      alert("User details updated successfully!");
    } catch (err) {
      alert("Failed to update user details. Please try again.");
      console.log("Error updating user: ", err);
    }
  };

  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      const res = await deleteUser(userId);
      alert("User deleted successfully!");
      navigate("/signin");
    } catch (e) {
      alert("Failed to Delete user details. Please try again.");
      console.log("Error updating user: ", e);
    }
  };

  return (
    <div className={styles.profileContainer}>
      <form onSubmit={handleSave} className={styles.profileForm}>
        <div className={styles.formGroup}>
          <label>Username</label>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="userName"
              value={userData.userName}
              onChange={(e) => handleChange(e, "userName")}
              className={`${styles.input} ${
                isEditing.userName ? styles.editing : ""
              }`}
            />
            <button
              type="button"
              onClick={() => handleEdit("userName")}
              className={styles.editButton}
            >
              <Edit size={16} />
            </button>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Email</label>
          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={(e) => handleChange(e, "email")}
              className={`${styles.input} ${
                isEditing.email ? styles.editing : ""
              }`}
            />
            <button
              type="button"
              onClick={() => handleEdit("email")}
              className={styles.editButton}
            >
              <Edit size={16} />
            </button>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Password</label>
          <div className={styles.inputGroup}>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={(e) => handleChange(e, "password")}
              className={`${styles.input} ${
                isEditing.password ? styles.editing : ""
              }`}
            />
            <button
              type="button"
              onClick={() => handleEdit("password")}
              className={styles.editButton}
            >
              <Edit size={16} />
            </button>
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.updateButton}>
            Update
          </button>
          <button
            type="button"
            className={styles.deleteButton}
            onClick={handleDelete}
          >
            Delete Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
