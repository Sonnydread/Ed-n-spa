import EdenSpa from "./components/eden";
import Cover from "./components/cover";
import MainNav from "./components/main-nav";
import { Search } from "@mui/icons-material";
import ConnectCarrousel from "./components/cards";
import React from "react";
import BlogGrid from "./components/blog-grid";
import BlogCards from "./components/blog-cards";
import ImagesCarrusel from "./components/images-carrusel";

export default function Page() {
  return (
    <>
    <div className="bg-cyan-200 min-h-screen bg-cover bg-center">
      <MainNav />
      <Cover />
      <ConnectCarrousel />
      <EdenSpa />
      <ImagesCarrusel />
      {/*<BlogCards />*/}
      {/*<BlogGrid />*/}
    </div>
    </>
  );
}
