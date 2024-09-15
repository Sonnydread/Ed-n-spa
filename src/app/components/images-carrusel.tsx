"use client";
import React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "../components/ui/carousel";
import Image from "next/image";

export default function ImagesCarrusel() {
  return (
    <Carousel
      className="w-full py-11 px-12"
      opts={{
        loop: true,
        align: "start",
      }}
      plugins={[
        AutoScroll({
          startDelay: 1000,
          speed: 1.5,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent className="overflow-x-visible ">
          <CarouselItem
            key={'someKey'}
            className="flex md:flex-row gap-6 min-w-fit max-w-fit"
          >
            <div className="grayscale-0 w-[380px] md:w-[520px] rounded-3xl overflow-hidden">
              <Image
                src="/eden/masaje-vert.jpg"
                alt={`image`}
                fill
                style={{ objectFit: 'cover' }}
              />            
              </div>
            <div className="flex flex-col gap-14 md:gap-[88px] px-4 bg-gray-600 rounded-3xl w-[280px] md:w-[320px]">
              <div className="border-2 flex rounded-3xl h-[420px] w-auto my-6 mx-2">
              <div className="p-2 flex flex-col gap-6">
                <Image src="/eden/Eden Spa-corel.png" 
                alt="quote" 
                width={250} 
                height={220} />
                <h3 className="px-[12px] text-[16px] mt-[50px] text-justify">Los masajes son buenos para aliviar el estrés, reducir la tensión muscular, mejorar la circulación sanguínea, aliviar dolores, y promover la relajación general del cuerpo y la mente.</h3>
              </div>
              </div>
            </div>
            <div className="grayscale h-auto w-[280px] md:w-[420px] rounded-3xl overflow-hidden">
              <Image
                src="/eden/masaje-h.jpg"
                alt={`image`}
                fill
                style={{ objectFit: 'cover' }}
              />            
              </div>
              <div className="flex flex-col gap-14 md:gap-[88px]  bg-gray-800 rounded-3xl w-[280px] md:w-[320px]">
              <div className="p-6 flex flex-col gap-6">
                <Image src="/eden/masaje-h.jpg" alt="quote" width={220} height={220} />
                <h3 className="text-2xl">uughj</h3>
              </div>
              <div>
                <p className="px-6 py-4 font-light text-gray-400 text-sm md:text-base">
                  uyghi
                </p>
                <div className="flex gap-3 px-6 py-4 items-center">
                  <Image
                    width={148}
                    height={148}
                    src="/eden/masaje-h.jpg"
                    priority
                    alt=""
                    className=" bg-white bg-opacity-[8%] backdrop-blur-md  rounded-full overflow-hidden p-2 max-w-10 md:max-w-12 max-h-10 md:max-h-12"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                  <div>
                    <h6 className="font-medium text-primary-200 text-sm md:text-base">ugyh</h6>
                    <p className="text-gray-400 font-light text-xs md:text-sm ">iyygh</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grayscale h-auto w-[280px] md:w-[420px] rounded-3xl overflow-hidden">
              <Image
                src="/eden/masaje-h.jpg"
                alt={`image`}
                fill
                style={{ objectFit: 'cover' }}
              />            
              </div>
          </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}


