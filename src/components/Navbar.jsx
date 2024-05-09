import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChat } from "react-icons/bs";
import { RiNotifaction3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Button, Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../context/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="menu"
        icon={<AiOutlineMenu />}
        color="black"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
      />

      <div className="flex">
        <NavButton
          title="cart"
          icon={<FiShoppingCart />}
          color="black"
          customFunc={() => handleClick("cart")}
        />
        <NavButton
          title="chat"
          icon={<BsChat />}
          color="black"
          customFunc={() => handleClick("chat")}
        />
        {/* <NavButton
          title="Notification"
          icon={<RiNotifaction3Line />}
          color="black"
          customFunc={() => handleClick("notification")}
        /> */}

        <TooltipComponent
         content='Profile'
         position="BottomCenter"
        >
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => handleClick('userProfile')}>
            <img 
            src={avatar} 
            className="rounded-full w-8 h-8"
            />
          </div>
        </TooltipComponent>
      </div>
    </div>
  );
};

export default Navbar;
