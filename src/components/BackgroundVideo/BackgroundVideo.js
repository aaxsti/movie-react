import style from './BackgroundVideo.module.css';
import backgroundVideo from "../../assets/bg-videos/mov-cuts.mp4";

const BackgroundVideo = () => {
    return (
        <div className={style.videoBg}>
            <video autoPlay loop muted
            style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1",

                // filter: "blur(10px)"
            }}>
                <source src={backgroundVideo} type="video/mp4"/>
            </video>
        </div>
    );
}

export default BackgroundVideo;