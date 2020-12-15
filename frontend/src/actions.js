import axios from "axios";

import { LOAD_POSTS } from "./actionTypes.js";
import { ADD_POST } from "./actionTypes.js";
import { UPDATE_POST } from "./actionTypes.js";
import { DELETE_POST } from "./actionTypes.js";
import { ADD_COMMENT } from "./actionTypes.js";
import { DELETE_COMMENT } from "./actionTypes.js";
import { ADD_TITLE } from "./actionTypes.js";
import { UPDATE_TITLE } from "./actionTypes.js";
import { DELETE_TITLE } from "./actionTypes.js";

export function getPosts() {
    return async function (dispatch) {
        const res = await axios.get("http://localhost:5000/api/posts");
        return dispatch(gotPosts(res.data));
    };
}
function gotPosts(posts) {
    return {
        type: LOAD_POSTS, payload: {
            "posts": posts
        }
    };
}

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

export function addTitle(id, obj) {
    return {
        type: ADD_TITLE, payload: {
            "id": id,
            "obj": obj
        }
    };
}

export function updateTitle(id, title) {
    return {
        type: UPDATE_TITLE, payload: {
            "id": id,
            "title": title
        }
    };
}

export function deleteTitle(id) {
    return {
        type: DELETE_TITLE, payload: {
            "id": id
        }
    };
}
