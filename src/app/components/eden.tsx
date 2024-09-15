
import Image from "next/image";
import Link from "next/link";

export default function edenSpa() {
  return (
    <div className="px-4 py-6 md:py-4 md:px-11 bg-cyan-200">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
        <div className="relative w-full h-[664px]">
          <Image src="/eden/aromas-v.jpg" alt="Description" quality={100} fill className="object-cover rounded-3xl" />
          <div className="absolute z-10 bottom-10 w-full px-8">
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="border bg-gray-800 rounded-2xl p-8 flex flex-col relative justify-between gap-[104px]">
            <div className="flex justify-between items-center">
            </div>
            <div className=" w-2/3">
            <Image src="/eden/masaje-pies-h.jpg" alt="Description" quality={100} fill className="object-cover rounded-2xl" />
            </div>
          </div>
          <div className="border border-gray-700 bg-gray-800 rounded-2xl p-8 flex flex-col relative justify-between gap-[104px]">
          <Image src="/eden/sauna-pareja.jpg" alt="Description" quality={100} fill className="object-cover rounded-2xl" />
          </div>
          <div className="border bg-gray-800 md:col-span-2 grid-cols-1 rounded-2xl p-8 flex flex-col justify-between relative gap-[104px]">
            <div className="flex justify-between items-center">
            <Image src="/eden/jacuzzi-oldman.jpg" alt="Description" quality={100} fill className="object-cover rounded-2xl" />
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

