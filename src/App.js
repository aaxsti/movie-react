import style from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

let App = () => {
  return (
    <div className={style.mainWrapper}>
        <div className={style.logoBox}>
            <h3 className={style.logo}>SS Movie</h3>
        </div>

        <div className={style.mainContent}>
            <Navbar/>
        </div>
        {/*<Footer/>*/}
    </div>


  );
}

export default App;