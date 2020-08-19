import axios from 'axios';
import { reset } from 'redux-form';
import { GET_POSTS, GET_POST, ADD_POST, DELETE_POST, EDIT_POST } from './types';
import history from '../history';

import { tokenConfig } from './auth';

// GET POSTS
export const getPosts = () => async (dispatch, getState) => {
    const res = await axios.get('/api/posts/', tokenConfig(getState));
    dispatch({
        type: GET_POSTS,
        payload: res.data
    });
};

// ADD POST
export const addPost = formValues => async (dispatch, getState) => {
    var formData = new FormData();
    const object = { ...formValues };
    for (const property in object) {
        if (property === 'image') {
            // add the image if the post contains one
            const file = object[property][0];
            formData.append(property, file, file.name);
        }
        else {
            formData.append(property, object[property]);
        }
    }
    const res = await axios.post('/api/posts/', formData, tokenConfig(getState));
    dispatch({
        type: ADD_POST,
        payload: res.data
    });
    dispatch(reset('postForm'));
};

// GET POST
export const getPost = id => async (dispatch, getState) => {
    const res = await axios.get(`/api/posts/${id}/`, tokenConfig(getState));
    dispatch({
        type: GET_POST,
        payload: res.data
    });
};

// DELETE POST
export const deletePost = id => async (dispatch, getState) => {
    console.log(id);
    await axios.delete(`/api/posts/${id}/`, tokenConfig(getState));
    dispatch({
        type: DELETE_POST,
        payload: id
    });
    history.push('/'); // takes us back to index after modal closes
};

// EDIT POST
export const editPost = (id, formValues) => async (dispatch, getState) => {
    const res = await axios.patch(`/api/posts/${id}/`, formValues, tokenConfig(getState));
    dispatch({
        type: EDIT_POST,
        payload: res.data
    });
    history.push('/');
};