import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    id: "",
    message: "",
    members: [],
    checkMembers: [],

};
const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        editMessage(state, action) {
            state.message = action.payload;
        },
        setResetMessage(state, action){
            state.message = "";
        },
        setMembers(state, action) {
            state.members = action.payload;
        },
        addCheckMembers(state, action) {
            state.checkMembers = [...state.checkMembers, action.payload];
        },
        removeCheckMembers(state, action) {
            const item = action.payload;
            // console.log("removeCheckMembers", action.payload)
            state.checkMembers = state.checkMembers.filter((obj) => obj.id != item.id);
        },
        setPost(state, action) {
            state.id = action.payload.id;
            state.message = action.payload.message;
            state.members = action.payload.members;
        }
    }
})

export const postActions = postSlice.actions;

export default postSlice;
