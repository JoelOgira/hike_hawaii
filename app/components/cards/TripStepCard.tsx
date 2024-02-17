import Image, { StaticImageData } from "next/image";

interface IProps {
  iconUrl: StaticImageData;
  title: string;
  description: string;
}

function TripStepCard({ iconUrl, title, description }: IProps) {
  return (
    <div className="flex  gap-8 items-center">

      <Image src={iconUrl} alt="step icon" className="w-auto h-auto" />

      <div className="flex flex-col">
        <p className="text-lightGray text-[1rem] font-[700]">{title}</p>
        <p className="text-lightGray text-[1rem] font-[400] max-w-sm">{description}</p>
      </div>
    </div>
  );
}

export default TripStepCard;
