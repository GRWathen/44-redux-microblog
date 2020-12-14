import { useSelector } from "react-redux";

import "./HomePage.css";

import Post from "./Post.js";

function HomePage() {
    const posts = useSelector(function (store) {
        console.log(store);
        return store.titles;
    });

    return (
        <div className="HomePage">
            <div className="HomePage-Heading">
                Welcome to <span className="HomePage-Title">Microblog</span>, our innovative site for communicating on the information superhighway.
            </div>
            <div>
                {
                    /*/
                    Object.keys(posts).map(function (post) {
                        return (<Post key={post} id={post} post={posts[post]} />);
                    })
                    //*/
                    posts.map(function (post) {
                        return (<Post key={post.id} id={post.id} post={post} />);
                    })
                }
            </div>
        </div>
    );
}

export default HomePage;
