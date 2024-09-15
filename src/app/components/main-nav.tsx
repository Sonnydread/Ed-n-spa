import Image from "next/image";

export default function MainNav(){
    return (
      <nav className="fixed top-6 w-full px-2 md:px-11 z-50">
        <div className="flex px-8 md:px-11 py-4 justify-between bg-[#151C23] bg-opacity-40 backdrop-blur-lg rounded-full">
          <div className="flex gap-8 items-center">
            <Image src={"/eden/LOGO EDEN.png"} width={200} height={30} alt="motivo logo"  quality={100}/>
          </div>
          <div className="flex gap-7 items-center">
            <Image
                src={"/eden/wassp.png"}
                width={50}
                height={50}
                alt="search icon"
              />
              <h4 className="font-bold text-[24px]">+51 984 159 879</h4>
          </div>
        </div>
      </nav>
    );
}
