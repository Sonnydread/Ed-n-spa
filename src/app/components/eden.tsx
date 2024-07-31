
import Image from "next/image";
import Link from "next/link";

export default function edenSpa() {
  return (
    <div className="px-4 py-6 md:py-14 md:px-11">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
        <div className="relative w-full h-[664px]">
          <Image src="/eden/aromas-v.jpg" alt="Description" quality={100} fill className="object-cover rounded-3xl" />
          <div className="justify-between items-center flex">
          </div>
          <div className="absolute z-10 bottom-10 w-full px-8">
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="border border-gray-700 bg-gray-800 rounded-2xl p-8 flex flex-col relative justify-between gap-[104px]">
            <div className="flex justify-between items-center">
              <p className="font-light text-gray-300">Spa</p>
            </div>
            <div className=" w-2/3">
              <p>Síguenos en Facebook</p>
            </div>
          </div>
          <div className="border border-gray-700 bg-gray-800 rounded-2xl p-8 flex flex-col relative justify-between gap-[104px]">
            <div className="w-2/3">
              <p>Follow me on Instagram</p>
            </div>
          </div>
          <div className="border border-gray-700 bg-gray-800 md:col-span-2 grid-cols-1 rounded-2xl p-8 flex flex-col justify-between relative gap-[104px]">
            <div className="flex justify-between items-center">
              <p className="font-light text-gray-300">Relax</p>
              <Link href="https://www.motivo.jp/">
                <div className="cursor-pointer">
                </div>
              </Link>
            </div>
            <div className="w-3/4">
              <p>Visita nuestro website</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

