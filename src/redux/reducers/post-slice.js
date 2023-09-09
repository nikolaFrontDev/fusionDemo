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
            state.checkMembers = state.checkMembers.filter((obj) => obj.id != item.id);
        },
        setCheckMembers(state, action){
            state.checkMembers = [];
        }
        
    }
})

export const postActions = postSlice.actions;

export default postSlice;
