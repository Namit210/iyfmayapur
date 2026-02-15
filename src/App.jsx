import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import StudentCourses from './pages/StudentCourses.jsx'

import { Home, Sp, Events, Seva, Store, Courses } from './pages/index.jsx'
import ViewCourse from './pages/ViewCourse.jsx'

function App() {
  return (
    <>
        <Navbar />
       <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/sp" element={<Sp />} />
        <Route path="/events" element={<Events />} />
        <Route path="/seva" element={<Seva />} />
        <Route path="/store" element={<Store />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/youth-courses" element={<StudentCourses />} />
        <Route path="/course/:courseId" element={<ViewCourse />} />

       </Routes>
    </>
  )
}

export default App
