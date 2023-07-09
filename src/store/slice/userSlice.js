import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "fullName",
    initialState: [],
    reducers: {
        addUser(state, action) { },
        removeuser(state, action) { },
        deleteAllUser(state, action) { },
    }
})

export default userSlice.reducer;