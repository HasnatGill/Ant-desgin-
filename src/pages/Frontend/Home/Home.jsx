import React from 'react'
import { AiFillDelete } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { addUser, deleteAllUser, removeUser } from '../../../store/slice/userSlice'
import { fakeUserData } from '../../../api'

export default function Home() {

    const dispatch = useDispatch()

    const data = useSelector((state) => {
        return state.users
    })

    const addNewUser = (name) => {
        dispatch(addUser(name))
    }

    const deleteUser = (i) => {
        dispatch(removeUser(i))
    }

    const clearUser = () => {
        dispatch(deleteAllUser())
    }

    return (
        <div className="container">

            <div className="d-flex justify-content-between align-items-center">
                <h2>List of User</h2>
                <button className='add-btn' onClick={() => addNewUser(fakeUserData())}>ADD THE USER</button>
            </div>
            <hr />
            {
                data.map((user, i) => {
                    return (
                        <div key={i}>
                            <div className="list_section d-flex py-3 px-5 justify-content-between align-items-center">
                                <h6>{user}</h6>
                                <span><AiFillDelete onClick={() => deleteUser(i)} className='fs-5 text-danger' /></span>
                            </div>
                            <hr />
                        </div>
                    )
                })
            }


            <button className="myButton d-block ms-auto" onClick={() => clearUser()} >Clear All User</button>

        </div>
    )
}

