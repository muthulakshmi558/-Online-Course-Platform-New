import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseById } from '../api/axios';

function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await getCourseById(id);
        setCourse(data);
      } catch (error) {
        // Error handled in api.js
      }
    };
    fetchCourse();
  }, [id]);

  if (!course) return <div className="text-center text-gray-600">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
        <p className="text-gray-600 mb-6">{course.description}</p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Instructors</h2>
        <ul className="list-disc pl-6 mb-6">
          {course.instructors.map((instructor, index) => (
            <li key={index} className="text-gray-700">{instructor}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Modules</h2>
        {course.modules.map(module => (
          <div key={module.id} className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-2">{module.title}</h3>
            <ul className="list-disc pl-6">
              {module.lessons.map((lesson, index) => (
                <li key={index} className="text-gray-700">
                  <a href={lesson} className="text-blue-600 hover:underline">
                    {lesson}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseDetail;