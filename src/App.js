import style from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route} from "react-router-dom";
import Movies from "./components/Movies/Movies";
import Logo from "./components/Logo/Logo";
import Movie from "./components/Movies/Movie/Movie";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import TopTenMovies from "./components/TopTen/TopTenMovies/TopTenMovies";
import {Provider} from "react-redux";

const App = () => {

    fetch('http://localhost:3000/films')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });


    return (
        <div className={style.mainWrapper}>
            <Logo/>
            <div className={style.mainWindow}>
                <Navbar/>
                <div className={style.content}>
                    <Route path='/movies' render={() => <Movie/>}/>
                    <Route path='/top' render={() => <TopTenMovies/>}/>
                    <Route path='/ratings' render={() => <div>Ratings</div>}/>
                    <Route path='/about' render={() => <div>About us</div>}/>
                    <Route path='/movieinfo/:movieId?' render={() => <MovieInfo/>}/>
                </div>
            </div>
        </div>
    )
}

export default App;