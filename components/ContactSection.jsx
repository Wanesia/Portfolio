import React from "react";
import { CgMail } from "react-icons/cg";

const ContactSection = () => {
  return (
    <div id="contact" className=" px-10">
      <h2>Contact</h2>
      <div className="flex gap-2 items-center mt-5">
        <CgMail className="h-8 w-8" />
        <p>wintmiller.w@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactSection;
