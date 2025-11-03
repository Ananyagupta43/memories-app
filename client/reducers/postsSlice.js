import { createSlice } from "@reduxjs/toolkit";
import { getPosts,createPostNew } from "../features/postsThunk";

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
            // state.loading = true;
           // console.log("hi")
             state.error = null;
          })
          .addCase(getPosts.fulfilled, (state, action) => {
            state.loading = false;
           // console.log("hi")
            state.posts = action.payload;
          })
          .addCase(getPosts.rejected, (state, action) => {
            state.error = action.payload;
          })
          .addCase(createPostNew.pending, (state,action) => {
            // state.loading = true;
           // console.log("hi")
             state.error = null;
          })
          .addCase(createPostNew.fulfilled, (state, action) => {
            state.loading = false;
           // console.log("hi")
            state.posts = [...state.posts,action.payload];
          })
          .addCase(createPostNew.rejected, (state, action) => {
           // state.loading = false;
            state.error = action.payload;
          });
      }
})
 
export const {createPost,fetchAllPost}=postsSlice.actions

export default postsSlice.reducer;