import { useState } from "react";
import Masonry from "react-masonry-css";
import Prabhupada from "../assets/January_20.jpg";
// Import images from /src/assets/life
const lifeImages = [
  "img0.jpg",
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img11.jpg",
  "img9.jpg",
  "img10.jpg",
].map((img) => `/life/${img}`);

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const fontstyle = {
    fontFamily: 'Antonio, sans-serif'
  }
  return (
    <div>
      <div className="relative overflow-hidden group">
        <img src="/youth.jpg" alt="" className="transition-transform duration-[15000ms] ease-in-out group-hover:scale-110" />

        <div className="absolute inset-0 flex flex-col justify-center items-center bg-[radial-gradient(circle,_transparent_40%,_rgba(0,0,0,0.7)_100%)]" />

        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle,_transparent_40%,_rgba(0,0,0,0.7)_100%)]">

          <h1 className="
  uppercase
  tracking-wider
  font-semibold
  text-5xl text-white text-center px-4 
                    md:text-6xl lg:text-8xl 
                   font-black tracking-tighter
                   drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]
                   animate-pulse-slow" style={fontstyle}>
            DISCOVER. CONNECT. TRANSFORM.
          </h1>
        </div>

      </div>

    <div className="flex flex-row justify-around items-center py-12 px-4 gap-8 flex-wrap md:flex-nowrap">
      {/* Left: Text and button */}
      <div className="flex-1 min-w-[300px] items-center text-center py-12 px-4">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="group focus:outline-none"
        >
          <h1 className="font-semibold text-5xl group-hover:text-[#BD8E2A]">WHO WE ARE</h1>
          <div className={`h-1 w-24 mt-6 transition-all duration-500 ${isOpen ? 'w-48 bg-[#BD8E2A]' : 'w-24 bg-gray-600 group-hover:bg-[#BD8E2A]'}`} />
        </button>
        <div 
          className={`grid transition-all duration-700 ease-in-out ${
            isOpen ? 'grid-rows-[1fr] opacity-100 mt-8' : 'grid-rows-[0fr] opacity-0 mt-0'
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-2xl max-w-3xl mb-6" >
              The ISKCON Youth Forum(IYF) is a global initiative focused on engaging and empowering young people through spiritual and personal development. It includes Uncovering and harnessing internal potentials such as motivation, concentration, tolerance, self-confidence, and kindness. Protecting young people from self-destructive addictions that damage mind and body.
            </p>
          </div>
        </div>
      </div>
      {/* Right: Image */}
      <div className="flex-1 min-w-[250px] flex justify-center items-center py-8">
        <img src="/home.jpg" alt="Who we are" className="max-w-sm md:max-w-md lg:max-w-2xl w-full rounded-lg shadow-lg" />
      </div>
    </div>

    <div
      className="my-12 mx-15 rounded-[25rem] items-center py-12 px-4 justify-center flex flex-col relative overflow-hidden"
      style={{
        background: "radial-gradient(circle, #fefcbf 60%, #fde68a 80%, #f59e42 100%)"
      }}
    >
      <div className="font-semibold text-5xl group-hover:text-[#BD8E2A] py-7 text-[#BD8E2A] z-10">Prabhupada Daily Quote</div>
      <img src={Prabhupada} alt="" className="h-135 z-10"/>
    </div>

        <div className="items-center text-center py-12 px-4">
          <div className="font-['Poppins'] text-sm tracking-wide my-4">(Photo/Video Gallery)</div>
          <h1 className="font-semibold text-5xl group-hover:text-[#BD8E2A]">Life at IYF Mayapur</h1>
        
        {/* Masonry Image Gallery */}
        <div className="max-w-6xl mx-auto px-2 md:px-8 py-8">
          <Masonry
            breakpointCols={{ default: 3, 900: 2, 600: 1 }}
            className="flex w-auto gap-4"
            columnClassName="masonry-column flex flex-col gap-4"
          >
            {lifeImages.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`Life at IYF Mayapur ${idx + 1}`}
                className="rounded-lg shadow-md w-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            ))}
          </Masonry>
        </div>
            </div>
    </div>
  )
}