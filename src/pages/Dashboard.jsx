import React from "react";
import CheckIcon from "../assets/check list icon 1.png";
import ProfileIcon from "../assets/user icon 1.png";
import Image1 from "../assets/хөрөнгө м-2.png";
import Image2 from "../assets/гүйлгээ м-2.png";
import Image3 from "../assets/тайлан м-2.png";

const Dashboard = () => {
  return (
    <div className="h-screen box-border">
      <div className="h-[66px] p-8 flex justify-end items-center bg-blue gap-5 text-white">
        <div className="flex items-center gap-2">
          <img src={CheckIcon} alt="fdas" />
          <span>систем админ</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={ProfileIcon} alt="fdas" />
          <span>Ихэрцэцэг</span>
        </div>
      </div>
      <div className="flex justify-evenly items-center h-4/5">
        <div className="bg-[#2F4069] flex flex-col justify-evenly items-center p-5 w-[308px] h-[327px] rounded-[15px]">
          <img src={Image1} alt="a" />
          <p className="text-white text-xl uppercase">хөрөнгө бүртгэл</p>
        </div>
        <div className="bg-[#2F4069] flex flex-col justify-evenly items-center p-5 w-[308px] h-[327px] rounded-[15px]">
          <img src={Image2} alt="a" />
          <p className="text-white text-xl uppercase">гүйлгээ</p>
        </div>
        <div className="bg-[#2F4069] flex flex-col justify-evenly items-center p-5 w-[308px] h-[327px] rounded-[15px]">
          <img src={Image3} alt="a" />
          <p className="text-white text-xl uppercase">тайлан</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
