// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoMdStopwatch } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="px-0 sm:px-6 lg:px-0 2xl:px-0">
      <div className="container mx-auto px-4 lg:px-36 py-10 lg:py-20 bg-footer-bg bg-cover bg-center">
        <div className="text-center text-white text-2xl lg:text-4xl font-bold">
          <p>WE&apos;RE READY TO GIVE YOU THE BEST DINING EXPERIENCE</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center text-center text-white pt-10 lg:pt-20 gap-y-10 lg:gap-y-0">
          <div className="flex flex-col items-center">
            <IoMdStopwatch className="text-[#febf00] text-4xl lg:text-5xl pb-2" />
            <p className="font-bold text-lg">OPENING HOURS</p>
            <p className="pt-3">Monday - Sunday</p>
            <p>9:00 AM to 11:30 PM</p>
          </div>

          <div className="flex flex-col items-center">
            <LuPhoneCall className="text-[#febf00] text-4xl lg:text-5xl pb-2" />
            <p className="font-bold text-lg">LET'S TALK</p>
            <p className="pt-3">Phone: 1-800-222-4545</p>
            <p>Fax: 1-800-222-4545</p>
          </div>

          <div className="flex flex-col items-center">
            <MdOutlineForwardToInbox className="text-[#febf00] text-4xl lg:text-5xl pb-2" />
            <p className="font-bold text-lg">BOOK A TABLE</p>
            <p className="pt-3">Email: demo@website.com</p>
            <p>Support: support@website.com</p>
          </div>

          <div className="flex flex-col items-center">
            <IoLocationOutline className="text-[#febf00] text-4xl lg:text-5xl pb-2" />
            <p className="font-bold text-lg">OUR ADDRESS</p>
            <p className="pt-3">123 Street New York City</p>
            <p>United States of America</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-x-4 pt-10 lg:pt-20">
          <div className="border-2 p-2 rounded-full">
            <img
              src="https://i.ibb.co/9c683Sh/facebook-circle.png"
              alt="Facebook"
            />
          </div>
          <div className="border-2 p-2 rounded-full">
            <img
              src="https://i.ibb.co/BrJK8pp/twitter-round-new-alt.png"
              alt="Twitter"
            />
          </div>
          <div className="border-2 p-2 rounded-full">
            <img
              src="https://i.ibb.co/B3HYjhg/instagram-round.png"
              alt="Instagram"
            />
          </div>
          <div className="border-2 p-2 rounded-full">
            <img
              src="https://i.ibb.co/FHHwWLp/linkedin-round.png"
              alt="LinkedIn"
            />
          </div>
        </div>

        <div>
          <p className="text-center text-sm text-gray-300 pt-4">
            &copy; {currentYear} <span className="text-[#febf00]">Niomax</span>{" "}
            All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
