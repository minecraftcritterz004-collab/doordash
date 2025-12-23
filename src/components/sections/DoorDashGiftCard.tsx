import Image from 'next/image';
import React from 'react';

const DoorDashGiftCard = () => {
  return (
    <>
      <div className=" flex items-center justify-center p-6">
        <div className="relative w-56 h-[141.05px]">
          <div className="absolute -inset-2  rounded-3xl -z-10"></div>

          <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-white/20 rounded-3xl pointer-events-none"></div>

            <div className="h-full flex flex-col justify-between p-4 relative z-10">
              <div className="text-right ">
                <span className="text-red-500 text-sm font-light tracking-wider opacity-90">
                  Gift Card
                </span>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <Image
                  src="/doordash-horizontal.png"
                  alt="DoorDash Logo"
                  width={180}
                  height={180}
                  className="mt-7 mx-auto w-auto drop-shadow-2xl"
                />
              </div>

              <div className="h-8"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoorDashGiftCard;
