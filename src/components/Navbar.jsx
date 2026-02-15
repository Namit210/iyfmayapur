import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex bg-black/10 backdrop-blur-md p-2 text-white justify-between items-center px-7">
      <h1 className="text-2xl font-bold flex items-center space-x-3">
        <img src="/logo.png" alt="" className='h-10 w-16 object-contain px-2'/>
        IYF Sridham  Mayapur</h1>
      <div>
        {/* Navigation links can be added here */}
        <ul className='flex space-x-6'>
            <li>
                <Link to='/'
                className='hover:text-blue-600 transition-colors font-bold'>Home</Link>
            </li>
            <li>
                <Link to='/events'
                className='hover:text-blue-600 transition-colors font-bold'>Events</Link>
            </li>
            <li>
                <Link to='/courses'
                className='hover:text-blue-600 transition-colors font-bold'>Courses</Link>
            </li>
            <li>
                <Link to='/store'
                className='hover:text-blue-600 transition-colors font-bold'>Store</Link>
            </li>
            <li>
                <Link to='/sp'
                className='hover:text-blue-600 transition-colors font-bold'>Srila Prabhupada</Link>
            </li>
        </ul>
      </div>
    </nav>
  )
}