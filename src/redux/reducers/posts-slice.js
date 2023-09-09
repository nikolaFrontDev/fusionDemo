import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  posts: [],
  filteredPosts: [],
  post: {},
  date: "",
};
const convertDate = (date) => {
  const resultDate = new Date(date).toLocaleDateString("af", {
    timeZone: "UTC",
  });
  return resultDate;
};
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts(state, action) {
      state.posts = [...state.posts, action.payload];
    },
    findPostUsers(state, action) {
      state.post = state.posts.find((post) => post.id == action.payload);
    },
    resetPost(state, action) {
      state.post = {};
    },
    filterByDate(state, action) {
      const {value} = action.payload;
      state.filteredPosts = state.posts.filter((post) => convertDate(post.date) <= value);

    },
    setDate(state, action){
      state.date = action.payload.date;

    }
  },
});

export const postsActions = postsSlice.actions;

export default postsSlice;
