import { createSearchParams, useNavigate } from "react-router-dom";

function Genre(props) {
    let create = () => {
        let textList = props.genres;
        let cGenre = [];
        for (const text of textList) {
            cGenre.push(<span key={`rating_${props.id}`} className="badge bg-light text-dark">{text}</span>);
        }
    }

    return (
        <div className="movie-genre-badge">
            {create()}
        </div>
    );
}
//------props----------
//id, imageURL, rating, lang, genre[]
//---------------------
export default function MovieCard(props) {

    let nav = useNavigate();

    let onClick = () => {
        nav({
            pathname: `/${props.id}`,
        }, { state: { ...props } });
    }
    return (
        <li key={props.id} className="movie-card" onClick={onClick}>
            <div className="card">
                <div className="movie-image">
                    <img src={props.imageURL} alt="" />
                    <div className="movie-rating">
                        {(props.rating) ? props.rating : 0}
                        <span className="movie-rating-icon material-icons">
                            star
                        </span>
                    </div>
                </div>
                <div className="card-body">
                    <div className="card-title">{props.title}</div>
                    <div className="movie-language">
                        {props.lang}
                    </div>
                    <Genre id={props.id} genres={props.genres} />
                </div>
            </div>
        </li>
    );
}