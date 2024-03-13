import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Ai, Settings } from './components';

const AIModule = () => {
  return (
    <Routes>
      <Route path="/" element={<Ai />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}

export default AIModule