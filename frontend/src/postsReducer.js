import { LOAD_POST, ADD_POST, UPDATE_POST, DELETE_POST } from "./actionTypes.js";
import { ADD_COMMENT, DELETE_COMMENT } from "./actionTypes.js";

const INITIAL_STATE = {};

function postsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_POST: {
            const newState = { ...state };
            if (action.payload.post.id !== undefined) {
                newState[action.payload.post.id] = action.payload.post;
            }
            return newState;
        }
        case ADD_POST: {
            const obj = action.payload.obj;
            const newState = { ...state, [action.payload.id]: obj };
            return newState;
        }
        case UPDATE_POST: {
            const newState = { ...state };
            newState[action.payload.id] = action.payload.post;
            return newState;
        }
        case DELETE_POST: {
            const newState = { ...state };
            delete newState[action.payload.id];
            return newState;
        }
        case ADD_COMMENT: {
            const newState = { ...state };
            const post = newState[action.payload.id];
            const id = (post.comments.length === 0) ? 1 : post.comments[post.comments.length-1].id +1;
            post.comments.push({ "id": id, "text": action.payload.comment});
            return newState;
        }
        // TODO: delete this?
        case DELETE_COMMENT: {
            const newState = { ...state };
            // comment already deleted
            // post will be reloaded with current comments
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default postsReducer;
