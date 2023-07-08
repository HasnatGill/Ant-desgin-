import React from 'react'

export default function Navbar() {
    return (
        <>
            <h5 className='text-center pt-3'>Welcome to Redux Toolkit</h5>
            <h1 className='text-center text-secondary display-2 fw-bold'>ADMIN TABLE</h1>

            <ul style={{ listStyle: "none", display: "flex" }} className='text-center bg-secondary justify-content-center my-4 text-white py-3'>
                <li className='px-3'>HOME</li>
                <li className='px-3'>ABOUT</li>
                <li className='px-3'>PROJECTS</li>
                <li className='px-3'>CODE</li>
                <li className='px-3'>CONTACT</li>
            </ul>

        </>
    )
}
