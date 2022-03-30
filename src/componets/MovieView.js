import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function MovieView(props) {

    let loc = useLocation();

    let [state] = useState({ ...loc.state })

    useEffect(() => {

    });

    return (
        <div class="movie-view">
            <div class="card">
                <div class="card-body">
                    <div class="movie-image">
                        <img src={state.imageURL} alt="" />
                        <div class="book-movie-button">
                            <button type="button" class="btn btn-outline-primary">BOOK NOW</button>
                        </div>
                    </div>
                    <div class="card-title">{state.title}</div>
                    <div class="movie-summary">
                        {state.summary}
                    </div>
                </div>

            </div>
        </div>
    );
}