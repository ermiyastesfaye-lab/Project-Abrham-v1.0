import React from "react";
import SideBar from "../../components/MessageSidebar/SideBar";
import MessageContainer from "../../components/messages/MessgaeContainer";

const Message = () => {
  return (
    <div className="flex justify-center sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 m-20">
      <SideBar />
      <MessageContainer />
    </div>
  );
};

export default Message;
