import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../api/index'

export const getPosts=createAsyncThunk(
    'features/getPosts',  //this is action type prefix like  `features/getPosts/pending` - `features/getPosts/fulfilled`  - `features/getPosts/rejected`
    async(_,{rejectWithValue})=>{
        try{
       const {data}=await api.fetchPosts(); 
       return data;
        }catch(error){
       return rejectWithValue(error?.data?.response || error?.message)
        }
    }
)

export const createPostNew=createAsyncThunk(
    'features/createPost',
    async(newpost,{rejectWithValue})=>{
        try{

            const {data} =await api.createNewPost(newpost)
            return data;

        }catch(err){
        return rejectWithValue(err?.data?.message || err?.message)
        }

    }

)

