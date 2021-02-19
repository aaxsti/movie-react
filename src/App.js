import style from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import {Redirect, Route, Switch} from "react-router-dom";
import Logo from "./components/Logo/Logo";
import MoviesContainer from "./components/Movies/MoviesContainer";
import MovieInfoContainer from "./components/MovieInfo/MovieInfoContainer";
import TopTenMoviesContainer from "./components/Movies/TopTen/TopTenMovies/TopTenMoviesContainer";
import About from "./components/About/About";

const App = () => {
    return (
        <div className={style.mainWrapper}>
            <Logo/>
            <div className={style.mainWindow}>
                <Navbar/>
                <div className={style.content}>
                    <Switch>
                        <Route path='/movieInfo/:movieId?' render={() => <MovieInfoContainer/>}/>
                        <Route path='/movies' render={() => <MoviesContainer/>}/>
                        <Route path='/top' render={() => <TopTenMoviesContainer/>}/>
                        <Route path='/about' render={() => <About/>}/>
                        <Redirect to="/movies"/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default App;