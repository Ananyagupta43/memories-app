import axios from 'axios';

const url='http://localhost:3000/posts';

export const fetchPosts=() => axios.get(url);
export const createNewPost=(newPost) => axios.post(url,newPost);
export const updatedPost=(id,currentPost)=>axios.patch(`${url}/${id}`,currentPost);
export const deletePost=(id)=>axios.delete(`${url}/${id}`);
