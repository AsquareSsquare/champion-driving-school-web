import React from "react";
import Image from "next/image";

function HeroImages() {
  return (
    <div className="border border-blue-500 w-[600px] h-[600px] flex items-center justify-center relative">
      <Image
        src="/images/RMB_car_1.png"
        alt="Hero car image - 1"
        width={300}
        height={300}
      />
      <Image
        src="/images/RMB_car_2.png"
        alt="Hero car image - 1"
        width={200}
        height={200}
        className="absolute top-0 right-0"
      />
      <Image
        src="/images/RMB_car_3.png"
        alt="Hero car image - 1"
        width={150}
        height={150}
        className="absolute bottom-0 animate-bounce"
      />
    </div>
  );
}

export default HeroImages;
