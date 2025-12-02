import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import StudentsList from './pages/StudentsList';
import AddStudent from './pages/AddStudent';
import StudentDetails from './pages/StudentDetails';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentsList />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/students/:id" element={<StudentDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
