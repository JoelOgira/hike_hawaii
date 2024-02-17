import Image, { StaticImageData } from "next/image"
import { BsSendFill } from "react-icons/bs"

interface IProps {
  imageUrl: StaticImageData;
  title: string;
  amount: string;
  duration: string;
}

function DestinationCard({
  imageUrl,
  title,
  amount,
  duration
}: IProps) {
  return (
    <div className="flex relative flex-col justify-between  pb-[2.63rem] group">
      <div className="object-fill ">
        <Image
          src={imageUrl}
          alt="destination image"
          className="w-[314px] h-[20.43rem]  object-cover rounded-t-[1.5rem]"
        />
      </div>
      <div className="bg-darkGreen w-full px-[1.62rem]  group-hover:shadow-md py-[2rem] rounded-b-[1.5rem]">
        <div className="flex justify-between text-lightGray text-[1.125rem] font-bold">
          <p>{title}</p>
          <p>{amount}</p>
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <BsSendFill className="text-lightGreen" />
          </div>
          <p className="text-lightGray font-bold">{duration}</p>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
