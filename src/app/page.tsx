import Image from "next/image";
import EdenSpa from "./components/eden";
import Cover from "./components/cover";
import MainNav from "./components/navbar";

export default function Page() {
  return (
    <>
    <MainNav />
    <Cover />
    <EdenSpa />
    </>
  );
}
