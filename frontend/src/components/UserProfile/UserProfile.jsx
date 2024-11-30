import React, { useState } from "react";
import { Edit } from "lucide-react";
import styles from "./UserProfile.module.css";
import { editUser } from "../../api/user";
import { useCookies } from "react-cookie";

const UserProfile = () => {
  const [cookies] = useCookies(); // Access all cookies for debugging
  console.log("All Cookies:", cookies); // Check what cookies are available
  const userId = cookies.userId;
  console.log("User ID:", userId);

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
      if (userData[key]) updatedUser[key] = userData[key]; // Include only non-empty fields
    }
    try {
      const res = await editUser(userId, updatedUser); // Pass userId and updatedUser
      console.log(res);
      alert("User details updated successfully!");
    } catch (err) {
      alert("Failed to update user details. Please try again.");
      console.log("Error updating user: ", err);
    }
  };

  return (
    <div className={styles.userProfileContainer}>
      <form onSubmit={handleSave} className={styles.profileForm}>
        <div className={styles.formGroup}>
          <label>Username</label>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="userName"
              value={userData.userName}
              onChange={(e) => handleChange(e, "userName")}
              disabled={!isEditing.userName}
              className={styles.input}
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
              disabled={!isEditing.email}
              className={styles.input}
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
              disabled={!isEditing.password}
              className={styles.input}
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

        <button type="submit" className={styles.saveButton}>
          Save
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
