import * as ActionTypes from './ActionTypes';

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    }
});

//new to ES6, when the property and value are the same, they can be written as just the name instead of using it twice:
//         payload: {
    //       campsiteId,
    //       rating,
    //       author,
    //       text
//}
//the above payload would work exactly like the original payload 