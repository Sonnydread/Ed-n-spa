import React from "react";
import Image from "next/image";

export default function BlogCards() {
    const articles = [
      {
        img: "/img/candidates/article-park.png",
        alt: "park",
        date: "01. 06. 2024",
        text: "How does residency works in Japan?",
      },
      {
        img: "/img/candidates/article-desk.png",
        alt: "desk",
        date: "01. 06. 2024",
        text: "Learn about the jobs that lead the digital market",
      },
      {
        img: "/img/candidates/article-passport.png",
        alt: "passport",
        date: "01. 06. 2024",
        text: "How do I get my visa for Japan?",
      },
    ];

    const duplicatedArticles = [...articles, ...articles];
    return (
        <div className="grid grid-cols-3 gap-x-6 gap-y-[112px] mx-11 py-[56px]">
      {duplicatedArticles.map((article, index) => (
        <div key={index} className="relative rounded-lg">
          <div className="absolute top-[16px] left-[16px] rounded-xl bg-primary-100 opacity-200 backdrop-blur-md text-[16px] font- px-6 py-4">Visa Support</div>
          <Image 
          src={article.img} 
          alt={article.alt} 
          width={500} 
          height={320} 
          className="rounded-lg"
          />
          <p className="text-gray-500 pt-[16px]">{article.date}</p>
          <p className="text-[22px] text-primary-100 leading-[28px] font-space max-w-[270px] pt-[24px]">{article.text}</p>
          <div className="flex flex-row items-center pt-[24px]">
            <Image
            src="/img/candidates/Gif-events.png"
            alt="face gif"
            width={32}
            height={32}
            className="rounded-full bg-gray-1000"
            />
            <p className="text-gray-300 ml-[10px]">Fabian Mezarina</p>
          </div>
        </div>
      ))}
    </div>
  );
}
