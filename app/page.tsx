import Image from "next/image";
import Navbar from "@/components/NavBar";
import Hero from "@/components/sections/Hero"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="border-x border-[rgba(13,25,38,0.3)] min-h-screen flex flex-col bg-[#F5F3EE]">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  )
}
