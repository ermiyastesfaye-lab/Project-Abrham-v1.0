import React, { useState } from "react";
import { Edit2, Check } from "react-feather";
import styles from "./UserProfile.module.css";

const UserProfile = () => {
  const [formData, setFormData] = useState({
    username: "JohnDoe",
    email: "john@example.com",
    password: "********",
  });

  const [editMode, setEditMode] = useState({
    username: false,
    email: false,
    password: false,
  });

  const handleEdit = (field) => {
    setEditMode((prev) => ({ ...prev, [field]: true }));
  };

  const handleSave = (field) => {
    setEditMode((prev) => ({ ...prev, [field]: false }));
    // Here you would typically send an API request to update the user's information
    console.log(`Saving ${field}:`, formData[field]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Handle update logic here
    console.log("Updating profile:", formData);
  };

  const handleDelete = () => {
    // Handle delete logic here
    console.log("Deleting profile");
  };

  return (
    <div className={styles.profileContainer}>
      <form className={styles.profileForm} onSubmit={handleUpdate}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <div className={styles.inputGroup}>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              readOnly={!editMode.username}
              className={editMode.username ? styles.editing : ""}
            />
            <button
              type="button"
              className={styles.editButton}
              onClick={() =>
                editMode.username
                  ? handleSave("username")
                  : handleEdit("username")
              }
            >
              {editMode.username ? <Check size={18} /> : <Edit2 size={18} />}
            </button>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <div className={styles.inputGroup}>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              readOnly={!editMode.email}
              className={editMode.email ? styles.editing : ""}
            />
            <button
              type="button"
              className={styles.editButton}
              onClick={() =>
                editMode.email ? handleSave("email") : handleEdit("email")
              }
            >
              {editMode.email ? <Check size={18} /> : <Edit2 size={18} />}
            </button>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <div className={styles.inputGroup}>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              readOnly={!editMode.password}
              className={editMode.password ? styles.editing : ""}
            />
            <button
              type="button"
              className={styles.editButton}
              onClick={() =>
                editMode.password
                  ? handleSave("password")
                  : handleEdit("password")
              }
            >
              {editMode.password ? <Check size={18} /> : <Edit2 size={18} />}
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
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
