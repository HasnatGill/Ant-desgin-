import React from 'react'

export default function Navbar() {
    return (
        <>
            <h5 className='text-center pt-3'>WELCOME TO REDUX TOOLKIT</h5>
            <h1 className='text-center text-secondary display-2 fw-bold'>ADMIN TABLE</h1>

            <ul style={{ listStyle: "none", display: "flex" }} className='text-center bg-dark justify-content-center my-4 text-white py-3'>
                <li className='px-3 pointer-cursor'>HOME</li>
                <li className='px-3 pointer-cursor'>ABOUT</li>
                <li className='px-3 pointer-cursor'>PROJECTS</li>
                <li className='px-3 pointer-cursor'>CODE</li>
                <li className='px-3 pointer-cursor'>CONTACT</li>
            </ul>

        </>
    )
}
