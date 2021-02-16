import React from "react";
import preloader from "../../../assets/images/preloader.svg";

let Preloader  = (props) => {
    return <div style={{backgroundColor: '#e5e5e5', position: "absolute"}}>
        <img src={preloader} />
    </div>
}

export default Preloader;