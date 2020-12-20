import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./HomePage.css";

import Post from "./Post.js";
import { getPosts, increaseVote, decreaseVote } from "./actions.js";

function HomePage() {
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();
    const posts = useSelector(function (store) {
        return store.titles;
    });

    useEffect(function () {
        async function fetchPosts() {
            await dispatch(getPosts());
            setIsLoading(false);
        }
        if (isLoading) {
            fetchPosts();
        }
    }, [dispatch, isLoading]);

    function voteUp(id) {
        dispatch(increaseVote(id));
        setIsLoading(true);
    }

    function voteDown(id) {
        dispatch(decreaseVote(id));
        setIsLoading(true);
    }

    return (
        <div className="HomePage">
            <div className="HomePage-Heading">
                Welcome to <span className="HomePage-Title">Microblog</span>, our innovative site for communicating on the information superhighway.
            </div>
            <div>
                {
                    posts.map(function (post) {
                        return (<Post key={post.id} id={post.id} post={post} voteUp={voteUp} voteDown={voteDown} />);
                    })
                }
            </div>
        </div>
    );
}

export default HomePage;
