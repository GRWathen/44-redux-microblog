import axios from "axios";

import { LOAD_POSTS } from "./actionTypes.js";
import { LOAD_POST } from "./actionTypes.js";
import { ADD_POST } from "./actionTypes.js";
import { UPDATE_POST } from "./actionTypes.js";
import { DELETE_POST } from "./actionTypes.js";
import { ADD_COMMENT } from "./actionTypes.js";
import { DELETE_COMMENT } from "./actionTypes.js";
import { ADD_TITLE } from "./actionTypes.js";
import { UPDATE_TITLE } from "./actionTypes.js";
import { DELETE_TITLE } from "./actionTypes.js";
import { INCREASE_VOTE } from "./actionTypes.js";
import { DECREASE_VOTE } from "./actionTypes.js";

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

export function getPost(id) {
    const result =  async function (dispatch) {
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
        return dispatch(gotPost(res.data));
    };
    return result;
}
function gotPost(post) {
    return {
        type: LOAD_POST, payload: {
            "post": post
        }
    };
}

export function addPost(id, obj) {
    return async function (dispatch) {
        const res = await axios.post("http://localhost:5000/api/posts", obj);
        return dispatch(addedPost(id, obj));
    };
}
function addedPost(id, obj) {
    return {
        type: ADD_POST, payload: {
            "id": id,
            "obj": obj
        }
    };
}

export function updatePost(id, post) {
    return async function (dispatch) {
        const res = await axios.put(`http://localhost:5000/api/posts/${id}`, post);
        return dispatch(updatedPost(id, post));
    };
}
function updatedPost(id, post) {
    return {
        type: UPDATE_POST, payload: {
            "id": id,
            "post": post
        }
    };
}

export function deletePost(id) {
    return async function (dispatch) {
        const res = await axios.delete(`http://localhost:5000/api/posts/${id}`);
        return dispatch(deletedPost(id));
    };
}
function deletedPost(id) {
    return {
        type: DELETE_POST, payload: {
            "id": id
        }
    };
}

export function addComment(id, comment) {
    return async function (dispatch) {
        const res = await axios.post(`http://localhost:5000/api/posts/${id}/comments`, { "text": comment });
        return dispatch(addedComment(id, comment));
    };
}
function addedComment(id, comment) {
    return {
        type: ADD_COMMENT, payload: {
            "id": id,
            "comment": comment
        }
    };
}

export function deleteComment(post, id) {
    return async function (dispatch) {
        const res = await axios.delete(`http://localhost:5000/api/posts/${post}/comments/${id}`);
        return dispatch(deletedComment(post, id));
    };
}
function deletedComment(post, id) {
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

export function increaseVote(id) {
    return async function (dispatch) {
        const res = await axios.post(`http://localhost:5000/api/posts/${id}/vote/up`);
        return dispatch(increasedVote(id));
    };
}
function increasedVote(id) {
    return {
        type: INCREASE_VOTE, payload: {
            "id": id
        }
    };
}

export function decreaseVote(id) {
    return async function (dispatch) {
        const res = await axios.post(`http://localhost:5000/api/posts/${id}/vote/down`);
        return dispatch(decreasedVote(id));
    };
}
function decreasedVote(id) {
    return {
        type: DECREASE_VOTE, payload: {
            "id": id
        }
    };
}
