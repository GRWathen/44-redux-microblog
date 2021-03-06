import { useState } from "react";

import "./CommentForm.css";

import Comment from "./Comment.js";

function CommentForm({ post, postID, add, removeComment }) {
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
        add(comment.value);
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
                    post.comments.map(function (comment) {
                        return (<Comment key={comment.id} id={comment.id} post={postID} comment={comment.text} removeComment={removeComment} />);
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
