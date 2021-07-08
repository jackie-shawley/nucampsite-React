import * as ActionTypes from './ActionTypes';

export const Comments = (state = { errMess: null, comments: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_COMMENT:
            const comment = action.payload; //put the content of action.payload into a new variable (comment)
            return {...state, comments: state.comments.concat(comment)}; //create a new array with comment object attached at the end(non-mutating; don't use .push because it will mutate the original array)

        default:
            return state;
    }
};
