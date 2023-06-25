import React from "react";
import Image from "next/image";

export type TProfileCardProps = {
  actions?: any;
  role: string;
};

const ProfileCard = ({ actions, role }: TProfileCardProps) => {
  let imgPath: string;
  switch (role) {
    case "Project":
      imgPath = "/assets/avatars/projectRoleAvatar.png";
      break;
    case "Designer":
      imgPath = "/assets/avatars/designerRoleAvatar.png";
      break;
    case "Developer":
      imgPath = "/assets/avatars/developerRoleAvatar.png";
      break;
    default:
      imgPath = "/assets/avatars/projectRoleAvatar.png";
  }
  return (
    <div className="overflow-hidden rounded-md bg-white w-full h-full pb-2 ring-4 ring-red-600">
      <div className="pt-4 flex justify-center">
        <div>
          <button
            type="button"
            className="rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-red-500"
            onClick={() => actions.nextStep({ type: "role", payload: role })}
          >
            Validate Stake
          </button>
        </div>
      </div>
      <div className="px-4 pb-4 flex justify-center">
        <div className="flex items-center overflow-hidden">
          <Image src={imgPath} width={224} height={128} alt="User avatar" />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <h4 className="text-xl">Current POAPs</h4>
        <div className="px-16 flex justify-center ml-2">
          <img src="/assets/user_poaps.png" alt="User POAPs" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
