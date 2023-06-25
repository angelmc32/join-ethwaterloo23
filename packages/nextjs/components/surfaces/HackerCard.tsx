import React from "react";
import Image from "next/image";

export type THackerCardProps = {
  actions?: any;
  role: string;
};

const HackerCard = ({ actions, role }: THackerCardProps) => {
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
      <div className="px-4 py-12 flex justify-center items-stretch">
        <div className="flex items-center overflow-hidden">
          <Image src={imgPath} width={224} height={128} alt="User avatar" />
        </div>
      </div>
      <div className="h-16 flex justify-center">
        <div>
          <button
            type="button"
            className="rounded-lg bg-red-600 px-8 py-3 text-base font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-red-500"
            onClick={() => actions.nextStep({ type: "role", payload: role })}
          >
            {role}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HackerCard;
