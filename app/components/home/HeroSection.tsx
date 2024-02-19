import React from "react"
import ButtonInternal from "../buttons/ButtonInternal"
import Image from 'next/image'
import Ochanda from '../../../public/images/Ochanda_sitting.jpg'

function HeroSection() {
  return (
    <section className="bg-jungleGreen py-8  w-full h-full px-4 md:py-16 md:px-12 lg:px-[72px] 2xl:px-[360px]">
      <div className="flex flex-col space-y-8 justify-between items-center sm:space-y-12 md:flex-row md:space-x-10 md:space-y-0">
        <div className="md:pt-4">
          <p className="text-[1.128rem] font-[700] text-lightGray uppercase mb-4">
            Best Hiking Adventure in Hawaii.
          </p>
          <div className="flex ">
            <p className="volkhov font-[700] text-[2rem] md:text-5xl leading-large text-white xl:text-6xl">
              <span>Travel, enjoy and experience the</span> <span className="text-lightGreen">island with your personal guide.</span>
            </p>
          </div>

          <p className="my-[1.6rem] font-bold leading-[1.692rem] text-lightGray text-[1rem] md:max-w-md">
            Built Wicket longer admire do barton vanity itself do in it. Preferred
            to sportsmen it engrossed listening. Park gate sell they west hard for
            the.
          </p>

          <div className="flex gap-6 items-center ">
            <div>
              <ButtonInternal
                href="/contact"
                title="Find Out More"
              />
            </div>
          </div>
        </div>
        <div className="block">
          <Image
            src={Ochanda}
            alt="Calvince Ochanda Resting after a long hike"
            className="rounded-[1.5rem]"
          />
        </div>
      </div>
    </section>

  );
}

export default HeroSection
