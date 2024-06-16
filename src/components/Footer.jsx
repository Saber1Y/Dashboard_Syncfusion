import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyName = "Saber LTD";

  return (
    <div className="flex justify-center my-10">
      © <span className="mr-2">{currentYear}</span> All rights reserved by{" "}
      <span className="text-bold ml-2">{companyName}</span>
    </div>
  );
};

export default Footer;
