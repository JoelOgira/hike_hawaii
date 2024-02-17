import DestinationCard from "../cards/DestinationCard"
import Hawaii1 from '../../../public/images/hawaii-4843610_640.jpg'
import Hawaii2 from '../../../public/images/hawaii-5074302_960_720.jpg'
import Hawaii3 from '../../../public/images/nofilter-3308714_640.jpg'

function TopSellingSection() {
  const destinations = [
    {
      id: 0,
      imageUrl: Hawaii1,
      title: "Ohana, Maui",
      amount: "$150",
      duration: "4 hrs hike"
    },
    {
      id: 1,
      imageUrl: Hawaii2,
      title: "Kahula, Matatina",
      amount: "$200",
      duration: "6 hrs hike"
    },
    {
      id: 2,
      imageUrl: Hawaii3,
      title: "Hou, Ohia",
      amount: "$180",
      duration: "5 hrs hike",
    },
    {
      id: 3,
      imageUrl: Hawaii3,
      title: "Hou, Ohia",
      amount: "$180",
      duration: "5 hrs hike",
    },
  ];
  return (
    <section className="sticky">

      <div className="top-selling">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>

      <div className="bg-jungleGreen py-24 w-full h-full px-4 md:px-12 lg:px-[72px] 2xl:px-[360px]">
        <p className="text-limeGreen text-[1.125rem] font-[600] text-center">
          Hiking Trails
        </p>
        <p className="volkhov text-[3.125rem] text-white font-[700] text-center">
          Top Hiking Destinations
        </p>
        <div className="flex flex-col gap-4 md:flex-row items-center md:justify-between mt-16 w-full">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              imageUrl={destination.imageUrl}
              title={destination.title}
              duration={destination.duration}
              amount={destination.amount}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopSellingSection;
