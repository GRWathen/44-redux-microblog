import { NavLink } from "react-router-dom";

import "./Post.css";

function Post({ id, post }) {
    const link = `/${id}`;

    return (
        <div className="Post">
            <NavLink className="Post-Link" exact to={link}>{post.title}</NavLink>
            <div>{post.description}</div>
        </div>
    );
}

export default Post;
