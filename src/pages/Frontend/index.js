import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'


function index() {
    return (
        <>
            <Routes>
                <Route path='/'>
                    <Route path='home' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                </Route>
            </Routes>
        </>
    )
}

export default index