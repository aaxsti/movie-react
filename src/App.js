import style from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Movies from "./components/Movies/Movies";
import Logo from "./components/Logo/Logo";
import Movie from "./components/Movies/Movie/Movie";
import MovieInfo from "./components/MovieInfo/MovieInfo";

const App = () => {
    return (
        <div className={style.mainWrapper}>
            {/*<BackgroundVideo/>*/}
            <Logo/>
            <div className={style.mainWindow}>
                <Navbar/>
                <div className={style.content}>
                    <Route path='/movies' render={() => <Movie/>}/>
                    <Route path='/favourites' render={() => <div>Favourites</div>}/>
                    <Route path='/ratings' render={() => <div>Ratings</div>}/>
                    <Route path='/about' render={() => <div>About us</div>}/>

                    <Route path='/movieinfo' render={() => <MovieInfo/>}/>
                </div>
            </div>
        </div>
    )
}

export default App;