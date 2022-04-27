import React from "react";

const Login = () => {
  return (
    <div className="flex h-screen flex-col justify-center items-center">
      <div className="bg-[#122E76] rounded-[16px] w-[368px] h-[126px] translate-y-10 flex items-center justify-center">
        <h2 className="uppercase text-[30px] text-white leading-9">
          Asset System
        </h2>
      </div>
      <div className="bg-gray/25 w-[457px] h-[500px]">
        <form className="flex flex-col gap-8 justify-center items-center p-10 mt-10">
          <input
            type="text"
            className="w-[388px] h-[66px] bg-[#f2f2f2] rounded-[5px]"
          />
          <input
            type="text"
            className="w-[388px] h-[66px] bg-[#f2f2f2] rounded-[5px]"
          />
          <input
            className="w-[388px] h-[40px] border-solid border-4 border-[#122e76] box-border rounded-[10px] text-[#122e76] text-[22px]"
            type="submit"
            value="нэвтрэх"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
