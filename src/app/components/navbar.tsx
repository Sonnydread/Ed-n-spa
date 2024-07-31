import Image from "next/image";

export default function MainNav(){
    return (
      <nav className="fixed top-6 w-full px-2 md:px-11 z-50">
        <div className="flex px-8 md:px-11 py-4 justify-between bg-[#151C23] bg-opacity-40 backdrop-blur-lg rounded-full">
          <div className="flex gap-8 items-center">
            <Image src={"/img/logo.png"} width={62} height={30} alt="motivo logo"  quality={100}/>
            <div className="rounded-2xl bg-[#FBFBFB] bg-opacity-5 px-6 py-4 hidden md:block">
              <h4 className="font-medium">Global Recruitment Agency</h4>
            </div>
          </div>
          <div className="flex gap-7 items-center">
            <div className="rounded-2xl px-[19px] py-4 border-2 border-[#FBFBFB] border-opacity-10 cursor-pointer hidden md:block">
              <Image
                src={"/icons/search.svg"}
                width={24}
                height={24}
                alt="search icon"
              />
            </div>
            <div className="rounded-2xl px-9 py-4 border-2 border-[#FBFBFB] border-opacity-10 cursor-pointer hidden md:block">
              <h4 className="font-medium">Lets Start</h4>
            </div>
            <div className="rounded-2xl px-[19px] py-4 sborder-2 border-[#FBFBFB] border-opacity-10 cursor-pointer">
              <Image
                src={"/icons/menu-burger-square.svg"}
                width={24}
                height={24}
                alt="search icon"
              />
            </div>
          </div>
        </div>
      </nav>
    );
}
