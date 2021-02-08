import React from "react";
import "./profileImage.css";

const ProfileImage = ({ profileImage }) => {
  return (
    <div className="profile-image-container">
      <img src={profileImage} alt="profile image" className="profile-image" />
    </div>
  );
};

export default ProfileImage;
