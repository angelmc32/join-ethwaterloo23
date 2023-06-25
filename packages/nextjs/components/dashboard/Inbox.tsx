/* eslint-disable jsx-a11y/alt-text */

/* eslint-disable @next/next/no-img-element */
import React from "react";

const Inbox = () => {
  return (
    <div className="flex flex-col w-full items-center rounded-md h-full">
      <div className="w-full flex justify-center">
        <h2 className="text-3xl py-4 font-bold text-white">Inbox</h2>
      </div>
      <div className="w-full px-8 flex flex-col gap-4">
        <div className="chat chat-start flex items-center">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="/assets/avatars/designerRoleAvatar.png" />
            </div>
          </div>
          <div className="chat-bubble text-white ml-2">
            It was said that you would, destroy the Sith, not join them.
          </div>
        </div>
        <div className="chat chat-start flex items-center">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="/assets/avatars/designerRoleAvatar.png" />
            </div>
          </div>
          <div className="chat-bubble text-white ml-2">It was you who would bring balance to the Force</div>
        </div>
        <div className="chat chat-start flex items-center">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="/assets/avatars/projectRoleAvatar.png" />
            </div>
          </div>
          <div className="chat-bubble text-white ml-2">Not leave it in Darkness</div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
