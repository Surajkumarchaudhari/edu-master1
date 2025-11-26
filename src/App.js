import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import CoursesPage from "./pages/Courses/Courses";
import Admissions from "./pages/Admissions/Admissions";
import Resources from "./pages/Resources/Resources";
import Faculty from "./pages/Faculty/Faculty";
import Placements from "./pages/Placements/Placements";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      {/* Always on top */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />

        <Route path="/admissions" element={<Admissions />} />

        <Route path="/resources" element={<Resources />} />

        <Route path="/faculty" element={<Faculty />} />

        <Route path="/placements" element={<Placements />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
