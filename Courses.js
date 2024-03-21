import React from 'react';
import CourseCard from './CourseCard';

function Courses() {
  // This would normally come from an API call
  const courses = [
    { id: 1, title: 'Course 1', price: '$100' },
    { id: 2, title: 'Course 2', price: '$200' },
    // ...
  ];

  return (
    <div className='grid grid-cols-3 gap-4'>
      {courses.map(course => <CourseCard key={course.id} course={course} />)}
    </div>
  );
}

export default Courses;