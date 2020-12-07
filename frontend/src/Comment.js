import { useDispatch } from "react-redux";

import './Comment.css';

import { deleteComment } from "./actions.js";

function Comment({ id, comment, post }) {
    const dispatch = useDispatch();

    function removeComment() {
        dispatch(deleteComment(post, id));
    }

    return (
        <div className="Comment">
            <div><i className="fas fa-trash-alt" onClick={removeComment}></i>&nbsp;{comment}</div>
        </div>
    );
}

export default Comment;
