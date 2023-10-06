import { useEffect, useState } from "react";
import { connectWithChatContract } from "../api";
import { AvatarGenerator } from "random-avatar-generator";

const Comment = ({ owner_comment, comment_msg }) => {
  const generator = new AvatarGenerator();

  const [name, setName] = useState();
  const getName = async (ownerAdd) => {
    console.log("ownerAdd", ownerAdd);
    try {
      const chatContract = await connectWithChatContract();
      const res = await chatContract.getUsername(ownerAdd);
      await setName(res);
    } catch (error) {
      console.log("get name error", error);
    }
  };
  useEffect(() => {
    getName(owner_comment);
  }, []);

  return (
    <div className="mt-5">
      <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-gray-900 shadow-lg">
        <div className="relative flex gap-4">
          <img
            src="https://w7.pngwing.com/pngs/306/70/png-transparent-computer-icons-management-admin-silhouette-black-and-white-neck-thumbnail.png"
            className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
            alt=""
            loading="lazy"
          />
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between">
              <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
                <h2>{name}</h2>
              </p>
              <a className="text-gray-500 text-xl">
                <i className="fa-solid fa-trash"></i>
              </a>
            </div>
            <p className="text-gray-400 text-sm">{owner_comment}</p>
          </div>
        </div>
        <p className="-mt-4 text-gray-500">{comment_msg}</p>
      </div>
    </div>
  );
};

export default Comment;