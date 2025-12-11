import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

// ⭐ MAIN PAGES
import Home from "./pages/Home/Home";
import CoursesPage from "./pages/Courses/Courses";
import Admissions from "./pages/Admissions/Admissions";
import Resources from "./pages/Resources/Resources";
import Faculty from "./pages/Faculty/Faculty";
import Placements from "./pages/Placements/Placements";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";

// ⭐ AUTH PAGES
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

// ⭐ RESOURCES INNER PAGES
import NotesPage from "./pages/Resources/NotesPage";
import PapersPage from "./pages/Resources/PapersPage";
import TestsPage from "./pages/Resources/TestsPage";
import LecturesPage from "./pages/Resources/LecturesPage";
import DoubtsPage from "./pages/Resources/DoubtsPage";
import AssignmentsPage from "./pages/Resources/AssignmentsPage";
import FilePreview from "./pages/Resources/FilePreview";

// ⭐ PROGRAM & COURSE DETAILS
import ProgramDetails from "./pages/Admissions/ProgramDetails";
import CourseDetails from "./pages/Courses/CourseDetails";

// ⭐ BLOG DETAILS PAGE
import BlogDetails from "./pages/Blog/BlogDetails";

// ⭐ TEACHER ADMIN (FULLSCREEN)
import TeacherAdmin from "./components/teacheradmin";

function AppRoutes() {
  const location = useLocation();

  // ❗ Hide Navbar on ANY teacher-admin route (including nested ones)
  const hideNavbar = location.pathname.startsWith("/teacher-admin");

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* ⭐ MAIN ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:slug" element={<CourseDetails />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        {/* ⭐ AUTH ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🎯 RESOURCES SUB ROUTES */}
        <Route path="/resources/notes" element={<NotesPage />} />
        <Route path="/resources/papers" element={<PapersPage />} />
        <Route path="/resources/tests" element={<TestsPage />} />
        <Route path="/resources/lectures" element={<LecturesPage />} />
        <Route path="/resources/doubts" element={<DoubtsPage />} />
        <Route path="/resources/assignments" element={<AssignmentsPage />} />

        {/* 📌 UNIVERSAL FILE PREVIEW */}
        <Route path="/resources/preview/:id" element={<FilePreview />} />

        {/* 📌 DETAILS */}
        <Route path="/program-details/:course" element={<ProgramDetails />} />
        <Route path="/blog/:id" element={<BlogDetails />} />

        {/* 🧑‍🏫 TEACHER ADMIN */}
        <Route path="/teacher-admin" element={<TeacherAdmin />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
