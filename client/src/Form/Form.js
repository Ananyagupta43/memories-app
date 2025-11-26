import React, { useState,useEffect } from "react";
import useStyles from "./styles";
import { useState } from "react";
import { TextField, Typography, Button, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createPostNew,editPost } from "../../features/postsThunk";
import FileBase from 'react-file-base64'
import { useSelector } from "react-redux";

const Form = ({currentId,setcurrentId} ) => {
    const singlePost=useSelector((store)=> currentId!=null ? store.posts.posts.find((postValue)=>postValue._id==currentId):null);
    const dispatch=useDispatch();


  const [postData, setpostData] = useState({
    creator: "",
    message: "",
    title: "",
    tags: "",
    selectedFile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId){
        //console.log(postData)
        dispatch(editPost({currentId,postData}));
    }else{
        dispatch(createPostNew(postData))
    }
    clear();
   
  };
  const clear = () => {
    setcurrentId(null);
    setpostData({
        creator: "",
        message: "",
        title: "",
        tags: "",
        selectedFile: "",
      })
  };

  useEffect(()=>{
    if(singlePost){
        setpostData(singlePost)
    }

  },[singlePost])

  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">{!currentId ? "Creating" : "Editing"} a memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) => {
            setpostData({ ...postData, creator: e.target.value });
          }}
        />
         <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => {
            setpostData({ ...postData, title: e.target.value });
          }}
        />
         <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) => {
            setpostData({ ...postData, message: e.target.value });
          }}
        />
         <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => {
            setpostData({ ...postData, tags: e.target.value });
          }}
        />
        <div className={classes.fileInput}>
       <FileBase type="file" 
       multiple={false}
       onDone={({ base64 }) =>
        setpostData((prevData) => ({ ...prevData, selectedFile: base64 }))
      }/>
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button className={classes.buttonSubmit} variant="contained" onClick={clear} color="secondary" size="small" type="submit" fullWidth>Clear</Button>

      </form>
    </Paper>
  );
};

export default Form;
