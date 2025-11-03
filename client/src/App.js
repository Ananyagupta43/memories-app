import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Form from "./Form/Form";
import Posts from "./Posts/Posts";
import book from "url:./images/book.jpeg";
import useStyles from './styles';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllPost } from "../reducers/postsSlice";
import { getPosts } from "../features/postsThunk";

const App = () => {
    const classes=useStyles();
    const dispatch=useDispatch();

    useEffect(()=>{
       dispatch(getPosts())
    },[])

  return (
    
  <Container maxWidth="lg">
    <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={book} alt="memories" height="60"/>
    </AppBar>

    <Grow in>
        <Container>
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>

            <Grid item xs={12} sm={4}>
                <Form/>
                </Grid>

            </Grid>
        </Container>
    </Grow>
   
  </Container>
)
   
};

export default App;
