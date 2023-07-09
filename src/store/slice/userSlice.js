import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: "fullName",
    initialState: [],
    reducers: {
        addUser(state, action) { },
        removeuser(state, action) { },
        deleteAllUser(state, action) { },
    }
})

export { user };