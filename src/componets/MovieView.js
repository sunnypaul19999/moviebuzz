import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function MovieView(props) {

    let loc = useLocation();

    let nav = useNavigate();

    let [state] = useState({ ...loc.state })

    let onClick = () => {
        nav({
            pathname: `booknow`,
        }, { state: { ...state } });
    }

    return (
        <div className="movie-view">
            <div className="card">
                <div className="card-body">
                    <div className="movie-image">
                        <img src={state.imageURL} alt="" />
                        <div className="book-movie-button">
                            <button onClick={onClick} type="button" className="btn btn-outline-primary">BOOK NOW</button>
                        </div>
                    </div>
                    <div className="card-title">{state.title}</div>
                    <div className="movie-summary">
                        {state.summary}
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}