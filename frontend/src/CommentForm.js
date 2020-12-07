import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import './CommentForm.css';

import { addComment } from "./actions.js";
import Comment from'./Comment.js';

function CommentForm({ postID }) {
    const dispatch = useDispatch();
    const comments = useSelector(function (store) {
        return store[postID].comments;
    });

    const initialState = {
        "comment": ""
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
        const { comment } = e.target;
        dispatch(addComment(postID, comment.value));
        setFormData(initialState);
    }

    function enableButton() {
        const txtComment = document.querySelector("#comment");

        if (txtComment.value === "") {
            document.querySelector("#btnAdd").disabled = true;
        }
        else {
            document.querySelector("#btnAdd").disabled = false;
        }
    }

    return (
        <form className="CommentForm" onSubmit={handleSubmit}>
            <fieldset>
                <legend>Comments</legend>

                {
                    Object.keys(comments).map(function (comment) {
                        return (<Comment key={comment} id={comment} post={postID} comment={comments[comment]} />);
                    })
                }

                <input
                    id="comment"
                    type="text"
                    name="comment"
                    placeholder="New Comment"
                    value={formData.comment}
                    onChange={handleChange}
                    onInput={enableButton}
                    onBlur={enableButton}
                />
            </fieldset>

            <button id="btnAdd" disabled>Add</button>
        </form>
    );
}

export default CommentForm;
