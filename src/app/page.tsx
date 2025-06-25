"use client";
import Image from "next/image";
import ITBerriesSection from "./itberries/page";
import AboutMeSection from "./about/page";
import ContactSection from "./contact/page";
import Footer from "./footer/page";
import SkillsSection from "./skills/page";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-black text-white fixed top-0 left-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end items-center space-x-8">
          <a href="#about" className="hover:text-gray-400">About me</a>
          <a href="#skills" className="hover:text-gray-400">Skills</a>
          <a href="#portfolio" className="hover:text-gray-400">Portfolio</a>
          <a
            href="#contact"
            className="bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-gray-200 transition">
            CONTACT ME
          </a>
        </div>
      </nav>

      <div className="w-full h-screen bg-[#D7D7D7] text-white pt-16 relative overflow-hidden">
        {/* Left Gray Half */}
        <div className="w-full h-full absolute top-0 left-0 bg-[#D7D7D7] z-0">
          <div className="max-w-6xl mx-auto mt-80 px-10 flex flex-col justify-center items-start">
            <h3 className="text-black text-xl font-medium mb-2">Hi, I am</h3>
            <h1 className="text-black text-4xl md:text-5xl font-bold mb-3">Tomasz Gajda</h1>
            <h2 className="text-gray-600 text-lg mb-6">
              Front-end Developer / UI Designer
            </h2>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-400 p-2 rounded shadow hover:scale-105 transition">
                <Image src="/mail.png" alt="Email" width={24} height={24} />
              </a>
              <a href="#" className="bg-gray-400 p-2 rounded shadow hover:scale-105 transition">
                <Image src="/vector.png" alt="GitHub" width={24} height={24} />
              </a>
              <a href="#" className="bg-gray-400 p-2 rounded shadow hover:scale-105 transition">
                <Image src="/linkedIn.png" alt="LinkedIn" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Diagonal Black Section */}
        <div
          className="absolute top-18 right-0 w-1/2 h-full bg-black z-10"
          style={{
            clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)',
          }}
        ></div>
      </div>

      {/* ITBerriesSection */}
      <ITBerriesSection/>

      {/* About */}
      <AboutMeSection/>
       
      {/* skills */}
      <SkillsSection/>
      
      {/* contact */}
      <ContactSection/>

      {/* footer */}
      <Footer/>
    </>
  );
}
