import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Paymethod from './Paymethod'
import Success from './Success/Success'
import NoFound from './NoFound/NoFound'


function index() {
    return (
        <>
            <Routes>
                <Route path='/'>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='success' element={<Success />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='payment-method' element={<Paymethod />} />
                    <Route path='*' element={<NoFound />} />
                </Route>
            </Routes>
        </>
    )
}

export default index