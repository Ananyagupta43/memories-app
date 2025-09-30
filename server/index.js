import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'

const app=express();
app.use('/posts',postRoutes)
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use((req, res, next) => {
    console.log("➡️ Request:", req.method, req.url);
    next();
  });


const PORT=process.env.PORT || 3000;
mongoose.connect(CONNECTION_URL)
    .then(()=>{app.listen(PORT,()=>{console.log('server is listening' + PORT)})})
    .catch((err)=>{console.log(err)});

