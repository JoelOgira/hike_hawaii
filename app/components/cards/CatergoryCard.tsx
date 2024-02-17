import Image, { StaticImageData } from "next/image";
import React from "react";

interface IProps {
  iconUrl: StaticImageData;
  title: string;
  description: string;
}

function CatergoryCard({ iconUrl, title, description }: IProps) {
  return (
    <div className={`flex relative flex-col gap-4 bg-jungleGreen rounded-[2.5rem] items-center p-[2.5rem]`} >
      <div>
        <Image src={iconUrl} alt="category card icon" className="h-[80px]" />
      </div>
      <p className="text-subtitle text-lightGreen text-[1.2rem] font-[600]">{title}</p>
      <p className="text-lightGray text-[1rem] font-bold">{description}</p>
    </div>
  );
}

export default CatergoryCard;
