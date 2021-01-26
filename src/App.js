import style from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route} from "react-router-dom";
import Movies from "./components/Movies/Movies";
import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import MoviesContainer from "./components/Movies/MoviesContainer";

const App = () => {
    return (
        <div className={style.mainWrapper}>
            {/*<BackgroundVideo/>*/}
            <div className={style.logoBox}>
                <h3 className={style.logo}>SS Movie</h3>
            </div>

            <div className={style.mainWindow}>
                <Navbar/>
                <div className={style.content}>
                    <Route path='/movies' render={() => <MoviesContainer/>}/>
                    <Route path='/favourites' render={() => <div>Favourites</div>}/>
                    <Route path='/ratings' render={() => <div>Ratings</div>}/>
                    <Route path='/about' render={() => <div>About us</div>}/>
                </div>
            </div>
        </div>
    )
}

export default App;