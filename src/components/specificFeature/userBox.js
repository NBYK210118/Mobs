import { useState } from "react";
import { useAuthStore } from "../../stores/userStore";

const UserBox = () => {
  const { user_metadata } = useAuthStore();

  return (
    <div className="p-3 pb-4 border-b border-gray-700 rounded-md">
      <div className="flex items-center gap-5">
        <img
          src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <div className="flex flex-col gap-1">
          <span className="text-blue-400 font-bold">
            {user_metadata?.name ? user_metadata.name : "UserName"} 님
          </span>
          <span>환영합니다!</span>
        </div>
      </div>
    </div>
  );
};

export default UserBox;
