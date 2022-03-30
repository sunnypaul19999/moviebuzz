import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookMovieForm from "./componets/BookMovieForm";
import MovieBuzzResultBase from "./componets/MovieBuzzResultBase";
import MovieView from "./componets/MovieView";

export default function App() {
    return (

        <div className="movie-buzz">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MovieBuzzResultBase />}></Route>
                    <Route path='/:id' element={<MovieView />}>
                        <Route path='booknow' element={<BookMovieForm />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}