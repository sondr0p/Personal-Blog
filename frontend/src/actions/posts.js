import axios from 'axios';
import { reset } from 'redux-form'; // added
import { GET_POSTS, GET_POST, ADD_POST, DELETE_POST, EDIT_POST } from './types';
import history from '../history';

// GET POSTS
export const getPosts = () => async dispatch => {
    const res = await axios.get('/api/posts/');
    dispatch({
        type: GET_POSTS,
        payload: res.data
    });
};

// ADD POST
export const addPost = formValues => async dispatch => {
    const res = await axios.post('/api/posts/', { ...formValues });
    dispatch({
        type: ADD_POST,
        payload: res.data
    });
    dispatch(reset('postForm'));
};

// GET POST
export const getPost = id => async dispatch => { // added
    const res = await axios.get(`/api/posts/${id}/`);
    dispatch({
        type: GET_POST,
        payload: res.data
    });
};

// DELETE POST
export const deletePost = id => async dispatch => { // added
    await axios.delete(`/api/posts/${id}/`);
    dispatch({
        type: DELETE_POST,
        payload: id
    });
    history.push('/'); // takes us back to index after modal closes
};

// EDIT POST
export const editPost = (id, formValues) => async dispatch => {
    const res = await axios.patch(`/api/posts/${id}/`, formValues);
    dispatch({
        type: EDIT_POST,
        payload: res.data
    });
    history.push('/');
};