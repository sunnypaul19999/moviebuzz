import { useEffect, useState } from 'react';
import MovieDataAPI from '../api/MovieDataAPI.js';
import MovieCard from './MovieCard';

export async function movieData() {
    let rdata = await MovieDataAPI.getData();
    let propData = [];
    if (rdata) {
        let show;
        for (let mData of rdata) {
            show = mData.show
            propData.push({
                id: show.id,
                title: show.name,
                rating: show.rating.average,
                imageURL: show.image.original,
                summary: show.summary,
                lang: show.language,
                genres: show.genres,
            });
        }
    }

    return propData;
}

export default function MovieBuzzResultBase() {

    let [state, setState] = useState({
        moviesCardPropData: [],
    })

    let getMovieCards = () => {
        let movieCards = [];
        let propData = state.moviesCardPropData;
        if (propData) {
            for (let data of propData) {
                movieCards.push(<MovieCard key={data.id} {...data} />);
            }
        }
        return movieCards;
    }

    useEffect(() => {
        movieData().then((propData) => {
            setState({ moviesCardPropData: propData });
        });
    }, [])

    return (
        <ul className="movie-buzz-result-base">
            {getMovieCards()}
            <li key='dummy-card-1' className="dummy-movie-card"></li>
            <li key='dummy-card-2' className="dummy-movie-card"></li>
            <li key='dummy-card-3' className="dummy-movie-card"></li>
            <li key='dummy-card-4' className="dummy-movie-card"></li>
            <li key='dummy-card-5' className="dummy-movie-card"></li>
        </ul>
    );
}