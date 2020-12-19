import "./Comment.css";

function Comment({ id, comment, post, removeComment }) {
    function remove() {
        removeComment(post, id);
    }

    return (
        <div className="Comment">
            <div><i className="fas fa-trash-alt" onClick={remove}></i>&nbsp;{comment}</div>
        </div>
    );
}

export default Comment;
