import axios from "../utils/axios";

export const fetchPosts = () => {
    return axios.get('/posts');
}

export const createPost = (payload) => {
    return axios.post('/posts', payload);
}

export const updatePost = (payload) => {
    return axios.put('/posts/update', payload);
}
