"use client";
import React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";

function ConnectCarrousel() {
  const positions = [
    "Balance",
    "Meditación",
    "Salud",
    "Paz mental",
    "Relajamiento corporal",
    "Desintoxicación",
    "Siéntete bien",
    "Rejuvenecimiento",
    "Tratamientos corporales",
    "Alivio del estrés",
    "Bienestar",
    "Cuidado personal",
  ];

  return (
    <div className="flex flex-col gap-6 pb-4 pt-7 bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-100 items-center justify-center">
      <Carousel
        className="w-full pt-4 pb-4"
        opts={{
          loop: true,
        }}
        plugins={[
          AutoScroll({
            startDelay: 0,
            stopOnInteraction: false,
            speed: 0.9,
          }),
        ]}
      >
        <CarouselContent>
          {[...positions, ...positions].map((name, index, _array) => (
            <CarouselItem key={index} className="basis-22">
              <div className="py-5 px-6 bg-cyan-600 rounded-2xl inline-block">
                <h6 className="text-white text-medium text-xs md:text-[16px]">{name}</h6>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
export default ConnectCarrousel;
