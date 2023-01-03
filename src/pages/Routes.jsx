import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'

function Index() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Frontend />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Index