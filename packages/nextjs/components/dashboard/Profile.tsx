import React from "react";
import ProfileCard from "../surfaces/ProfileCard";

const Profile = () => {
  return (
    <div className="flex flex-col w-full items-center rounded-md h-full">
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-3xl py-4 font-bold text-slate-900">Your Profile</h2>
        <div className="w-full px-16">
          <ProfileCard role="Developer" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
