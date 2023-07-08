import React from 'react'

export default function Home() {
    return (
        <div className="container">

            <div className="d-flex justify-content-between align-items-center">
                <h2>List of User</h2>
                <button className='add-btn'>Add the User</button>
            </div>
            <div className="list_section d-flex py-3 px-5 justify-content-between align-items-center">
                <h6>fullName</h6>
                <h6>Delete</h6>
            </div>
        </div>
    )
}
