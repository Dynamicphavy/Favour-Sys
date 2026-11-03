import Nav from "@/components/sections_vid/Nav";
import Vid from "@/components/sections_vid/Vid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="border-x border-[rgba(13,25,38,0.3)] min-h-screen flex flex-col bg-[#F5F3EE]">
        <Nav />
        <Vid />
        <Footer />
      </div>
    </>
  )
}