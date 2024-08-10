import React from "react";
import Image from "next/image";

export default function Search() {
    return(
        <div>
<Image
src="/img/candidates/blog-building.png"
alt="building"
width={500}
height={300}
className="mt-4"
/>
<div className="relative">
          <input
          type="text"
          placeholder="Search article"
          className="border-gray-600 text-[14px] font-space border p-6 pl-12 bg-gray-900 rounded-lg text-primary-100 w-[406px] h-[48px]"
          />
        <Image
          className="absolute flex items-center left-[12px] top-3"
          width={24}
          height={24}
          alt="loupe icon"
          src="/img/blog/loupe.svg"
          />
        <div className="ml-2">
            <Image
              src="/img/blog/Vector.svg"
              alt="arrow"
              width={8}
              height={4}
              />
          </div>
          </div>
              </div>
    )
}