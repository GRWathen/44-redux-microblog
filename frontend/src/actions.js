import { ADD_POST } from "./actionTypes.js";
import { UPDATE_POST } from "./actionTypes.js";
import { DELETE_POST } from "./actionTypes.js";
import { ADD_COMMENT } from "./actionTypes.js";
import { DELETE_COMMENT } from "./actionTypes.js";

export function addPost(id, obj) {
    return {
        type: ADD_POST, payload: {
            "id": id,
            "obj": obj
        }
    };
}

export function updatePost(id, post) {
    return {
        type: UPDATE_POST, payload: {
            "id": id,
            "post": post
        }
    };
}

export function deletePost(id) {
    return {
        type: DELETE_POST, payload: {
            "id": id
        }
    };
}

export function addComment(id, comment) {
    return {
        type: ADD_COMMENT, payload: {
            "id": id,
            "comment": comment
        }
    };
}

export function deleteComment(post, id) {
    return {
        type: DELETE_COMMENT, payload: {
            "post": post,
            "id": id
        }
    };
}
