
import Image from "next/image";

export default function Cover() {
  return (
    <div>
<div className="relative text-[20px]">
    <Image
        src="/eden/masaje-h.jpg"
        alt="Cover-masajes"
        layout="responsive"
        quality="100"
        width={1920}
        height={1080}
        className="w-full"
        ></Image>
        <div className=" absolute bottom-[30px] left-[40px] rounded-3xl bg-gray-800 opacity-70 w-[490px] h-[180px]">
        </div>
        </div>
    </div>
  )
}

