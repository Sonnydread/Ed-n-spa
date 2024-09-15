
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
        <div className=" absolute bottom-[30px] left-[40px] rounded-3xl p-3 bg-gray-800 opacity-70 w-[630px] h-[220px]">
          <p className="text-white text-[20px] font-bold p-1">* Sauna General Mixto</p>
          <p className="text-white text-[20px] font-bold p-1">* Masajes Profesionales</p>
          <p className="text-white text-[20px] font-bold p-1">* Privado Personal con Sauna y Turco</p>
          <p className="text-white text-[20px] font-bold p-1">* Suite Privada con Sauna y Baño Turco</p>
          <p className="text-white text-[20px] font-bold p-1">* Suite privada con Sauna, Turco y Jacuzzi con Hidromasaje </p>
        </div>
        </div>
    </div>
  )
}

