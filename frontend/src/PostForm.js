import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import "./PostForm.css";

import { addPost, updatePost, addTitle, updateTitle } from "./actions.js";

function PostForm() {
    const dispatch = useDispatch();
    const posts = useSelector(function (store) {
        return store.posts;
    });

    const initialState = {
        "title": "",
        "description": "",
        "body": "",
        "comments": {}
    }

    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, description, body } = e.target;
        const obj = {
            "title": title.value,
            "description": description.value,
            "body": body.value,
            "comments": (id === null) ? {} : posts[id].comments
        };
        let key = id;
        if (id === null) {
            key = uuidv4();
            dispatch(addPost(key, obj));
            dispatch(addTitle(key, {
                "id": key,
                "title": title.value,
                "description": description.value
            }));
        }
        else {
            dispatch(updatePost(key, obj));
            dispatch(updateTitle(key, {
                "id": key,
                "title": title.value,
                "description": description.value
            }));
        }
        setFormData(initialState);
        history.push("/");
    }

    const handleClick = (e) => {
        history.push("/");
    }

    function enableButton() {
        const txtTitle = document.querySelector("#title");
        const txtDescription = document.querySelector("#description");
        const txtBody = document.querySelector("#body");

        if ((txtTitle.value === "") || (txtDescription.value === "") || (txtBody.value === "")) {
            document.querySelector("#btnSubmit").disabled = true;
        }
        else {
            document.querySelector("#btnSubmit").disabled = false;
        }
    }

    let id = null;
    let label = "New";

    const history = useHistory();
    if (history.location.state !== null) {
        id = history.location.state.id;
        label = "Edit";
        const state = { "state": {} };
        window.history.replaceState(state, "", `/${history.location.state.id}`);
    }

    useEffect(() => {
        if (id === null) {
            return;
        }
        const state = {
            "title": posts[id].title,
            "description": posts[id].description,
            "body": posts[id].body,
            "comments": posts[id].comments
        };
        setFormData(state);
    }, [id, posts])

    return (
        <form className="PostForm" onSubmit={handleSubmit}>
            <fieldset>
                <legend>{label} Post</legend>

                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    onInput={enableButton}
                    onBlur={enableButton}
                />

                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    onInput={enableButton}
                    onBlur={enableButton}
                />

                <label htmlFor="body">Body</label>
                <textarea
                    rows="10"
                    id="body"
                    type="text"
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                    onInput={enableButton}
                    onBlur={enableButton}
                />
            </fieldset>

            <button id="btnSubmit" disabled>Save</button>
            <button id="btnCancel" type="button" onClick={handleClick}>Cancel</button>
        </form>
    );
}

export default PostForm;
