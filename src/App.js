import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieBuzzResultBase from "./componets/MovieBuzzResultBase";
import MovieView from "./componets/MovieView";

export default function App() {
    return (
        <div className="movie-buzz">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MovieBuzzResultBase />}></Route>
                    <Route path='/:id/display' element={<MovieView />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}