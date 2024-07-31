"use client";
import React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function ConnectCarrousel() {
  const positions = [
    "Back-end",
    "UI Design",
    "UX Design",
    "Front-end",
    "Full Stack",
    "Software Engineer",
    "Graphic Designer",
    "Recruiter",
    "Officer",
    "Chief Officer",
    "CEO",
    "Marketing",
    "Product Manager",
  ];

  return (
    <div className="flex flex-col gap-6 md:gap-14 pt-10 pb-6 md:pt-28 md:pb-11">
      <h2 className="text-center text-[32px] md:text-6xl max-w-6xl mx-auto px-4 ">
        We connect you with your goal, we prepare you for the future
      </h2>
      <Carousel
        className="w-full pt-11 "
        opts={{
          loop: true,
        }}
        plugins={[
          AutoScroll({
            startDelay: 0,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent>
          {[...positions, ...positions].map((name, index, _array) => (
            <CarouselItem key={index} className="basis-22">
              <div className="py-4 px-6 bg-gray-800 rounded-2xl inline-block">
                <h6 className="text-gray-400 text-medium text-xs md:text-[16px]">{name}</h6>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
export default ConnectCarrousel;
