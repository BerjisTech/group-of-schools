import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home, About, Contact, NotFound } from './components';

const NLIVModule = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default NLIVModule