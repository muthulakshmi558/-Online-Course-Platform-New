import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCourses } from '../api/axios';

function HomePage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data.slice(0, 3)); // Limit to 3 courses for showcase
      } catch (error) {
        // Error handled in api.js
      }
    };
    fetchCourses();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-100 to-gray-50 py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Learn Anything, Anytime, Anywhere
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover world-class courses taught by expert instructors. Start your learning journey today!
          </p>
          <Link
            to="/courses"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Explore Courses
          </Link>
        </div>
      </section>

      {/* Course Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Courses
          </h2>
          {courses.length === 0 ? (
            <p className="text-center text-gray-600">Loading courses...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map(course => (
                <div
                  key={course.id}
                  className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {course.description}
                  </p>
                  <Link
                    to={`/course/${course.id}`}
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    View Course
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Join thousands of learners and unlock your potential with our expertly crafted courses.
          </p>
          <Link
            to="/courses"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;