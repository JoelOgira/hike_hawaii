import React from "react";
import CatergoryCard from "../cards/CatergoryCard"
import satellite from '../../../public/images/satellite.png'
import cog from '../../../public/images/cog.png'
import aircraft from '../../../public/images/aircraft.png'
import mic from '../../../public/images/mic.png'

function CategorySection() {
  const features = [
    {
      id: 1,
      iconUrl: satellite,
      title: "Weather",
      description:
        "You're invited to the beautiful Hawaii weather.",
      highlighted: false,
    },
    {
      id: 2,
      iconUrl: aircraft,
      title: "Best Flights",
      description:
        "Smooth traveling experience withing the island.",
      highlighted: true,
    },
    {
      id: 3,
      iconUrl: mic,
      title: "Local Events",
      description:
        "Best entertainment venues across Honolulu.",
      highlighted: false,
    },
    {
      id: 4,
      iconUrl: cog,
      title: "Customization",
      description:
        "We deliver a personalized hiking experience.",
      highlighted: false,
    },
  ];
  return (
    <section className="sticky">

      <div className="custom-shape-divider-top-1708092760">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>

      <div className="bg-darkGreen py-24 w-full h-full px-4 md:px-12 lg:px-[72px] 2xl:px-[360px]">
        <div className="flex flex-col space-y-8">
          <p className="text-lightGray text-[1.125rem] font-[600] text-center">
            Category
          </p>
          <p className="volkhov text-lightGreen text-[2rem] text-title font-[700] text-center md:text-5xl">
            We Offer Best Services
          </p>
          <div className="grid grid-cols gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <CatergoryCard
                key={feature.id}
                iconUrl={feature.iconUrl}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
