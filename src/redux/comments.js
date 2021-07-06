import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload; //put the content of action.payload into a new variable (comment)
            comment.id = state.length;  //add more properties to the payload object
            comment.date = new Date().toISOString();  //add more properties to the payload object
            return state.concat(comment); //create a new array with comment object attached at the end(non-mutating; don't use .push because it will mutate the original array)
        default:
            return state;
    }
};
