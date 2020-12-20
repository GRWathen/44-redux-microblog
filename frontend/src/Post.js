import { NavLink } from "react-router-dom";

import "./Post.css";

function Post({ id, post, voteUp, voteDown }) {
    const link = `/${id}`;

    function thumbsUp() {
        voteUp(id);
    }

    function thumbsDown() {
        voteDown(id);
    }

    return (
        <div className="Post">
            <div className="Post-Content">
                <NavLink className="Post-Link" exact to={link}>{post.title}</NavLink>
                <div>{post.description}</div>
            </div>
            <div className="Post-Votes">
                <div>{post.votes} votes <i className="fas fa-thumbs-up" onClick={thumbsUp}></i>&nbsp; <i className="fas fa-thumbs-down" onClick={thumbsDown}></i></div>
            </div>
        </div>
    );
}

export default Post;
