import { useEffect, useState } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./PostView.css";

import CommentForm from "./CommentForm.js";
import { getPost, deletePost, deleteTitle, addComment, deleteComment } from "./actions.js";

function PostView() {
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();
    const { postID } = useParams();

    const dispatch = useDispatch();
    const post = useSelector(function (store) {
        return store.posts[postID];
    });

    useEffect(function () {
        async function fetchPost() {
            await dispatch(getPost(postID));
            setIsLoading(false);
        }
        if (isLoading) {
            fetchPost();
        }
    }, [dispatch, postID, post, isLoading]);

    if (!Number(postID)) {
        return (
            <Redirect to="/" />
        );
    }

    if (isLoading) return <b>Loading</b>;

    if (post === undefined) {
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
        dispatch(deleteTitle(postID));
        history.push({
            pathname: "/",
            state: {
            }
        });
    }

    function add(comment) {
        dispatch(addComment(postID, comment));
        setIsLoading(true);
    }

    function removeComment(postID, id) {
        dispatch(deleteComment(postID, id));
        setIsLoading(true);
    }

    return (
        <div className="PostView">
            <div>
                <span className="PostView-Title">
                    {post.title}
                </span>
                <span className="PostView-Edit">
                    <i className="fas fa-edit" onClick={edit}></i>
                    &nbsp;
                    <i className="fas fa-trash-alt" onClick={remove}></i>
                </span>
            </div>
            <br />
            <div className="PostView-Description">{post.description}</div>
            <br />
            <div>{post.body}</div>
            <hr />
            <CommentForm post={post} postID={postID} add={add} removeComment={removeComment} />
        </div>
    );
}

export default PostView;
