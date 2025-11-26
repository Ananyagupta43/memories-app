import { createSlice } from "@reduxjs/toolkit";
import { getPosts,createPostNew,editPost } from "../features/postsThunk";

const postsSlice=createSlice({
    name:'post',
    initialState:{
        posts:[],
        error:null
    },
    reducers:{
        createPost:(state,action)=>{
            state.posts.push(action.payload)    
        },
        fetchAllPost:(state,action)=>{
            return action.payload   
        },

    },
    extraReducers: (builder) => {
        builder
          .addCase(getPosts.pending, (state) => {
             state.error = null;
          })
          .addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
          })
          .addCase(getPosts.rejected, (state, action) => {
            state.error = action.payload;
          })
          .addCase(createPostNew.pending, (state,action) => {
             state.error = null;
          })
          .addCase(createPostNew.fulfilled, (state, action) => {
            state.posts = [...state.posts,action.payload];
          })
          .addCase(createPostNew.rejected, (state, action) => {
            state.error = action.payload;
          })
          .addCase(editPost.pending, (state,action) => {
             state.error = null;
          })
          .addCase(editPost.fulfilled, (state, action) => {
           // console.log(action.payload._id)
            state.posts = state.posts.map((post)=>post._id===action.payload._id ? action.payload : post)
          })
          .addCase(editPost.rejected, (state, action) => {
            state.error = action.payload;
          });
      }
})
 
export const {createPost,fetchAllPost}=postsSlice.actions

export default postsSlice.reducer;