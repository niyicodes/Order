import React from "react";
import { Outlet } from "react-router-dom";
import SmallNav from "../Components/SmallNav";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <SmallNav />
        <Navbar />
      </header>
      <main className="flex-grow w-full md:px-[5%]">
        <Outlet />
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
