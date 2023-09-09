import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  checkUsers: [],
};

const usersSurveySlice = createSlice({
  name: "usersSurvey",
  initialState,
  reducers: {
    setUsers(state, action) {
      state.checkUsers = [...state.checkUsers, action.payload];
    },
    removeUsers(state, action) {
      const { id } = action.payload;
      state.checkUsers = state.checkUsers.filter(
        (user) => user.id != id
      );
    },
  },
});

export const usersSurveyActions = usersSurveySlice.actions;

export default usersSurveySlice;
