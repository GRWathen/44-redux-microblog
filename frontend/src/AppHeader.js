import { NavLink } from "react-router-dom";

import "./AppHeader.css";

function AppHeader() {
    return (
        <div className="AppHeader">
            <br />
            <div className="AppHeader-Title">Microblog</div>
            <br />
            <div>Get in the Rithm of blogging!</div>
            <br />
            <div>
                <NavLink className="AppHeader-Link" exact to="/">Blog</NavLink>
                &nbsp;
                <NavLink className="AppHeader-Link" exact to="/new">Add a new post</NavLink>
            </div>
            <br />
        </div>
    );
}

export default AppHeader;
