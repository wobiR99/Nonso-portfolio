import React from "react";

const GetInTouch = () => {
  return (
    <div className="sm:pt-[60px] sm:pb-[120px] sm:pl-[120px] p-4 pb-[60px] flex flex-col gap-8">
      <h3 className="sm:text-[40px] text-[32px]  font-medium flex flex-col gap-1 ">
        Collaborate to Create Impact, Let’s
        <span className="font-medium">
          Make A <span className="font-bold">Difference</span>
        </span>
      </h3>

      <p className="text-base font-normal">
        I’m open for work! Feel free to reach out, you never can tell.
      </p>
      <div className="flex sm:gap-6 gap-4 sm:flex-row flex-col justify-start items-start">
        <p className="text-base font-normal">Email: nonsoobi17@gmail.com</p>
        <p className="text-base font-normal">Whatsapp: +234 8165 9057 69</p>
      </div>
    </div>
  );
};

export default GetInTouch;
