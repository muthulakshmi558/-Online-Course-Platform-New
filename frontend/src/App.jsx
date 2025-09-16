import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="/course/:id" element={<CourseDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;