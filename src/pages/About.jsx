import { useEffect, useState } from "react";
import { useTypewriter } from "../components/Typewriter";

export default function About() {
  const [opacity1, setOpacity1] = useState(1);
  const [opacity2, setOpacity2] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      // First image fades OUT in first screen
      const o1 = Math.max(1 - scrollY / vh, 0);

      // Second image fades IN during second screen
      const start = vh * 0.6;
      const end = vh * 1.6;
      const o2 = Math.min(Math.max((scrollY - start) / (end - start), 0), 1);

      setOpacity1(o1);
      setOpacity2(o2);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Slide 1 */}
      <div
        className="fixed top-0 left-0 h-screen w-full
                   bg-[url('/prabhupada-noback.png')]
                   bg-contain bg-right bg-no-repeat
                   items-center 
                   text-white text-3xl font-bold
                   pointer-events-none"
        style={{ opacity: opacity1 }}
      >
        <div className="mt-20 px-10 md:px-20 lg:px-40 text-[3rem]">
          WHO IS 
          <div>
              SRILA PRABHUPADA  
            </div>?
            <p className="text-[2rem] w-[90vh]">
              
              {useTypewriter("     For millennia the teachings and the rich culture of bhakti-yoga, or Krishna Consciousness, had been hidden within the borders of India. Today, millions around the globe express their gratitude to Srila Prabhupada for revealing the timeless wisdom of bhakti to a world.",30, opacity2 < 0.05)}
            </p>
        </div>
      </div>

      

      <div
        className="fixed top-0 left-0 h-screen w-full
                   pointer-events-none"
        style={{ opacity: opacity2 }}
      >

        <p className="absolute top-20 right-10 md:right-20 lg:right-40 w-[60vh] text-center text-white text-[2.5rem] font-bold">
          
  As a youth growing up in British-controlled India, Abhay became involved with Mahatma Gandhi’s civil disobedience movement to secure independence for his nation. 
</p>

      </div>
      
      <div
        className="fixed top-0 left-0 h-screen w-full
                   bg-[url('/prabhupada-with-his-father.jpg')]
                   bg-cover bg-no-repeat
                   pointer-events-none"
        style={{ opacity: opacity2 }}
      >

        <p className="absolute top-20 right-10 md:right-20 lg:right-40 w-[60vh] text-right text-white text-[2.5rem] font-bold">
          
  Srila Prabhupada was born Abhay Charan De on September 1, 1896 to a pious Hindu family in Calcutta. 
</p>

      </div>

      {/* Slide 2 */}
      <div
        className="fixed top-0 left-0 h-screen w-full
                   bg-[url('/prabhupada-gradient.png')]
                   bg-cover bg-no-repeat
                   pointer-events-none"
        style={{ opacity: opacity2 }}
      >

        <p className="absolute top-20 right-10 md:right-20 lg:right-40 w-[60vh] text-right text-white text-[2.5rem] font-bold">
          
  Abhay, later known by the honorific <br />
  A.C. Bhaktivedanta Swami Prabhupada,<br /> 
  spent the next 32 years preparing for his journey west.
</p>

      </div>

      {/* Scroll space */}
      <div className="h-[300vh] bg-black" />
    </div>
  );
}
