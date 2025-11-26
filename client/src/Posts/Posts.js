import React, { use } from 'react';
import PostData from './PostData/PostData';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { CircularProgress,Grid } from '@material-ui/core';


const Posts=({setcurrentId})=>{
    const posts=useSelector((store)=>store.posts.posts);
    const classes=useStyles();
    //console.log(posts);
    return(
       !posts.length ? <CircularProgress/> : (
        <Grid className={classes.container} container alignItems='stretch' spacing={3}>
         {
            posts.map((post)=>(
                <Grid key={post._id} item xs={12} sm={6}>
                    <PostData post={post} setcurrentId={setcurrentId}/>
                </Grid>
            ))
         }
        </Grid>
       )
    )
}

export default Posts;