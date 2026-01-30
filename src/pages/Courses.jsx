import { useNavigate } from 'react-router-dom';

export default function Courses() {

  const navigate = useNavigate();

  return (
   <div className="flex flex-col md:flex-row">
  {/* Youth Courses */}
  <div className="md:w-1/2 relative h-screen overflow-hidden group flex items-center justify-center" onClick={() => navigate('/youth-courses')}>
    
    {/* Background image */}
    <div className="absolute inset-0 bg-[url('/road.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/40 transition-colors duration-700 group-hover:bg-black/60"></div>

    {/* Text */}
    <h2 className="relative z-10 text-white text-4xl font-semibold tracking-wide transition-transform duration-700 group-hover:-translate-y-2">
      Youth Courses
    </h2>
  </div>

  {/* Vedic Courses */}
  <div className="md:w-1/2 relative h-screen overflow-hidden group flex items-center justify-center" onClick={() => navigate('/vedic-courses')}>
    
    <div className="absolute inset-0 bg-[url('/dev.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>

    <div className="absolute inset-0 bg-black/40 transition-colors duration-700 group-hover:bg-black/60"></div>

    <h2 className="relative z-10 text-white text-4xl font-semibold tracking-wide transition-transform duration-700 group-hover:-translate-y-2">
      Vedic Courses
    </h2>
  </div>
</div>
  );
}
