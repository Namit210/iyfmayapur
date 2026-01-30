import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import StudentCourses from './pages/StudentCourses.jsx'

import { Home, About, Events, Seva, Store, Courses } from './pages/index.jsx'

function App() {
  return (
    <>
        <Navbar />
       <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/seva" element={<Seva />} />
        <Route path="/store" element={<Store />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/youth-courses" element={<StudentCourses />} />

       </Routes>
    </>
  )
}

export default App
