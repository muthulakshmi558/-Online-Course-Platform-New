import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCourses } from '../api/axios';

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (error) {
        // Error is already logged in api.js
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map(course => (
        <div key={course.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
          <p className="text-gray-600 mb-4">{course.description}</p>
          <Link
            to={`/course/${course.id}`}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            View Course
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CourseList;