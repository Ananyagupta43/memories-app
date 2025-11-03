import React, { use } from 'react';
import PostData from './PostData/PostData';
import useStyles from './styles';
import { useSelector } from 'react-redux';


const Posts=()=>{
    const posts=useSelector((store)=>store.posts.posts);
    const classes=useStyles();
    console.log(posts);
    return(
        <>
       <PostData/>
       <PostData/>
       <PostData/>
        
         </>
    )
}

export default Posts;