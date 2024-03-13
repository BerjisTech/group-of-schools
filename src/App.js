import logo from './logo.svg';
import './App.css';
import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const NLIVModule = lazy(() => import('./modules/nliv/NLIVModule'));
const AIModule = lazy(() => import('./modules/ai/AIModule'));
const CoursesModule = lazy(() => import('./modules/courses/CoursesModule'));
const DiyModule = lazy(() => import('./modules/diy/DiyModule'));
const DonationsModule = lazy(() => import('./modules/donations/DonationsModule'));
const ExamsModule = lazy(() => import('./modules/exams/ExamsModule'));
const ForumsModule = lazy(() => import('./modules/forums/ForumsModule'));
const LibraryModule = lazy(() => import('./modules/library/LibraryModule'));
const SchoolsModule = lazy(() => import('./modules/schools/SchoolsModule'));
const SuppliersModule = lazy(() => import('./modules/suppliers/SuppliersModule'));
const UsersModule = lazy(() => import('./modules/user/UsersModule'));


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/*" element={<NLIVModule />} />
          <Route path="ai" element={<AIModule />} />
          <Route path="courses" element={<CoursesModule />} />
          <Route path="diy" element={<DiyModule />} />
          <Route path="donations" element={<DonationsModule />} />
          <Route path="exams" element={<ExamsModule />} />
          <Route path="forums" element={<ForumsModule />} />
          <Route path="library" element={<LibraryModule />} />
          <Route path="schools" element={<SchoolsModule />} />
          <Route path="suppliers" element={<SuppliersModule />} />
          <Route path="users" element={<UsersModule />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
