import {configureStore} from '@reduxjs/toolkit';
// import thunk from 'react-thunk';
import postsSlice from '../reducers/postsSlice'

const store=configureStore({
    reducer:{
        posts:postsSlice
    },
    

})

export default store;