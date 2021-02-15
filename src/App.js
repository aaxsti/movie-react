import style from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route} from "react-router-dom";
import Logo from "./components/Logo/Logo";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import TopTenMovies from "./components/TopTen/TopTenMovies/TopTenMovies";
import MoviesContainer from "./components/Movies/MoviesContainer";

const App = () => {
    return (
        <div className={style.mainWrapper}>
            <Logo/>
            <div className={style.mainWindow}>
                <Navbar/>
                <div className={style.content}>
                    <Route path='/movieInfo/:movieId?' render={() => <MovieInfo/>}/>
                    <Route path='/movies' render={() => <MoviesContainer/>}/>
                    <Route path='/top' render={() => <TopTenMovies/>}/>
                    <Route path='/about' render={() => <div>About</div>}/>
                </div>
            </div>
        </div>
    )
}

export default App;