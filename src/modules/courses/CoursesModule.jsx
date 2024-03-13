import React from 'react'
import { Route, Routes, Outlet } from 'react-router-dom';

import { Main, Course, Courses, Lesson, Lessons, Settings } from './components';

const CoursesModule = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="" element={<Courses />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/:courseId" element={<Course />} />
        <Route path="/:courseId/lessons" element={<Lessons />} />
        <Route path="/:courseId/lessons/:lessonId" element={<Lesson />} />
      </Route>
    </Routes>
  )
}

export default CoursesModule;