import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
        },
        removeuser(state, action) { },
        deleteAllUser(state, action) { },
    }
})

export default userSlice.reducer;
export const { addUser } = userSlice.actions;