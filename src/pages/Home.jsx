import { useState } from "react";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const fontstyle = {
    fontFamily: 'Antonio, sans-serif'
  }
  return (
    <div>
      <div className="relative overflow-hidden group">
        <img src="/radha_madhava.jpg" alt="" className="transition-transform duration-[15000ms] ease-in-out group-hover:scale-110" />

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
        <img src="/home.jpg" alt="Who we are" className="max-w-xs md:max-w-sm lg:max-w-md w-full rounded-lg shadow-lg" />
      </div>
    </div>

        <div className="items-center text-center py-12 px-4">
          <div className="font-['Poppins'] text-sm tracking-wide my-4">(Live/Upcoming Events)</div>
          <h1 className="font-semibold text-5xl group-hover:text-[#BD8E2A]">The "Pulse"</h1>
        </div>

    </div>
  )
}