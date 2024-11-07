import React from "react";
import { IoMdStopwatch } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="px-4 sm:px-6 lg:px-0 2xl:px-0">
      <div className="container mx-auto px-28 py-20 bg-footer-bg bg-cover bg-center">
        <div className="text-center text-white text-4xl font-bold ">
          <p>WE READY TO HAVE YOU THE BEST DINING EXPERIENCE</p>
        </div>
        <div className="flex justify-between items-center text-center text-white pt-20">
          <div className="flex flex-col items-center">
            <IoMdStopwatch className="text-[#febf00] size-7 pb-2" />
            <p className="font-bold text-lg">OPENING HOURS</p>
            <p className="pt-3">Monday - Sunday</p>
            <p>9:00 AM to 11:30 PM</p>
          </div>

          <div className="flex flex-col items-center">
            <LuPhoneCall className="text-[#febf00] size-7 pb-2" />
            <p className="font-bold text-lg">LET&apos;S TALK</p>
            <p className="pt-3">Phone: 1-800-222-4545</p>
            <p>Fax: 1-800-222-4545</p>
          </div>

          <div className="flex flex-col items-center">
            <MdOutlineForwardToInbox className="text-[#febf00] size-7 pb-2" />
            <p className="font-bold text-lg">BOOK A TABLE</p>
            <p className="pt-3">Email: demo@website.com</p>
            <p>Support: support@website.com</p>
          </div>

          <div className="flex flex-col items-center">
            <IoLocationOutline className="text-[#febf00] size-7 pb-2" />
            <p className="font-bold text-lg">OUR ADDRESS</p>
            <p className="pt-3">123 Stree New York City</p>
            <p>United States of America</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-4 pt-20">
          <div className="border-2 p-1 rounded-full">
            <img
              src="https://i.ibb.co.com/9c683Sh/facebook-circle.png"
              alt=""
            />
          </div>
          <div className="border-2 p-1 rounded-full">
            <img
              src="https://i.ibb.co.com/BrJK8pp/twitter-round-new-alt.png"
              alt=""
            />
          </div>
          <div className="border-2 p-1 rounded-full">
            <img
              src="https://i.ibb.co.com/B3HYjhg/instagram-round.png"
              alt=""
            />
          </div>
          <div className="border-2 p-1 rounded-full">
            <img src="https://i.ibb.co.com/FHHwWLp/linkedin-round.png" alt="" />
          </div>
        </div>
        <div>
          <p className="text-center text-sm text-gray-300 pt-4">
            &copy; {currentYear} <span className="text-[#febf00]">Niomax</span> All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
