import React from "react";
import { userAvatar } from "../../assets/index";

const Avatar = ({ classAdd }) => {
  return (
    <div className={classAdd}>
      <img
        id="avatarButton"
        type="button"
        className="w-10 h-10 rounded-full cursor-pointer"
        src={userAvatar}
        alt="User dropdown"
      />
    </div>
  );
};

export default Avatar;
