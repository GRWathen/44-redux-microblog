import { Redirect, useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./PostView.css";

import CommentForm from "./CommentForm.js";
import { deletePost } from "./actions.js";

function PostView() {
    const dispatch = useDispatch();
    const posts = useSelector(function (store) {
        return store;
    });

    const history = useHistory();
    const { postID } = useParams();
    if (posts[postID] === undefined) {
        return (
            <Redirect to="/" />
        );
    }

    function edit() {
        history.push({
            pathname: "/new",
            state: {
                "id": postID
            }
        });
    }

    function remove() {
        dispatch(deletePost(postID));
        history.push({
            pathname: "/",
            state: {
            }
        });
    }

    return (
        <div className="PostView">
            <div>
                <span className="PostView-Title">
                    {posts[postID].title}
                </span>
                <span className="PostView-Edit">
                    <i className="fas fa-edit" onClick={edit}></i>
                    &nbsp;
                    <i className="fas fa-trash-alt" onClick={remove}></i>
                </span>
            </div>
            <br />
            <div className="PostView-Description">{posts[postID].description}</div>
            <br />
            <div>{posts[postID].body}</div>
            <hr />
            <CommentForm postID={postID} />
        </div>
    );
}

export default PostView;
