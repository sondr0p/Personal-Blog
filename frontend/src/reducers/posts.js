import _ from 'lodash';
import { GET_POSTS, GET_POST, ADD_POST, DELETE_POST, EDIT_POST } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                ..._.mapKeys(action.payload, 'id')
            };
        case GET_POST:
        case ADD_POST:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        case DELETE_POST:
            return _.omit(state, action.payload);
        case EDIT_POST:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        default:
            return state;
    }
};