import React from 'react'
import { AiFillDelete } from "react-icons/ai"

export default function Home() {
    return (
        <div className="container">

            <div className="d-flex justify-content-between align-items-center">
                <h2>List of User</h2>
                <button className='add-btn'>Add the User</button>
            </div>
            <hr />
            <div className="list_section d-flex py-3 px-5 justify-content-between align-items-center">
                <h6>fullName</h6>
                <span><AiFillDelete className='fs-5 text-danger' /></span>
            </div>

            <hr />

            <button className="myButton d-block ms-auto">Clear All User</button>

        </div>
    )
}

