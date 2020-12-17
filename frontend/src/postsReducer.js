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
            //obj["comments"] = {};
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
            let key = Date.now();
            post["comments"][key] = action.payload.comment;
            newState[action.payload.id] = post;
            return newState;
        }
        case DELETE_COMMENT: {
            const newState = { ...state };
            const post = newState[action.payload.post];
            delete post["comments"][action.payload.id];
            newState[action.payload.post] = post;
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default postsReducer;
