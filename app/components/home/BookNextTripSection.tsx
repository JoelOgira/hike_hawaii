import TripStepCard from "../cards/TripStepCard"
import Image from 'next/image'
import trail1 from '../../../public/images/trail-1.jpeg'
import destination from '../../../public/images/destination-icon.png'
import payment from '../../../public/images/payment-icon.png'
import airport from '../../../public/images/airport-icon.png'

function BookNextTripSection() {
  const steps = [
    {
      id: 0,
      iconUrl: destination,
      title: "Choose Hiking Destination",
      description:
        "Pick your desired hiking destination from the current list of hiking trails on our website",
    },
    {
      id: 1,
      iconUrl: payment,
      title: "Select Date",
      description:
        "Select the date you would like to go hike from the available dates in the calendar",
    },
    {
      id: 2,
      iconUrl: airport,
      title: "Reach Venue on Selected Date",
      description:
        "Arrive at the venue at the venue in good time, carrying with you all of the recommended essentials ready to begin your adventure.",
    },
  ];
  return (
    <section className="top-full sticky">
      <div className="custom-shape-divider-top-1708092760">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>

      <div className="bg-darkGreen py-24 w-full h-full px-4 md:px-12 lg:px-[72px] 2xl:px-[360px]">
        <div className="flex justify-between flex-col space-y-10 md:flex-row md:space-x-10 items-center md:space-y-0">
          <div>
            <p className="text-lightGray text-[1.125rem] font-[600] text-left">
              Easy and Fast
            </p>
            <p className="text-white volkhov text-[3.125rem] text-title font-[700] text-left max-w-xl">
              Book your next Hike with Us in 3 easy steps
            </p>

            <div className="flex flex-col gap-[3rem] mt-[1.94rem]">
              {steps.map((step) => (
                <TripStepCard
                  key={step.id}
                  title={step.title}
                  description={step.description}
                  iconUrl={step.iconUrl}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center z-50">
            <Image src={trail1} alt="Hiking trail" className="rounded-[1.5rem]" />
          </div>
        </div>
      </div>

    </section>
  );
}

export default BookNextTripSection;
