export function Tweet({ id, name, content, like, onDelete, onLike }) {


    return (
        <div className="tweet">
            <button onClick={() => onDelete(id)} className="delete">❌</button>
            <h3>{name}</h3>
            <p>{content}</p>
            <div>
                <button className="submit-like" onClick={() => onLike(id)}>{like} ❤️</button>
            </div>
        </div>
    );
}