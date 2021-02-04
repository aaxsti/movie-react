import React, {useState} from 'react';
import style from './Movie.module.css';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import JSON_DATA from "../../../MOCK_DATA.json";

const Movie = (props) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [value, setValue] = useState(0);

    let parsedDate = new Date(props.premiereDate).toDateString().slice(3);
    let joinedCastArray = props.cast.join(', ');

    let addToFavourites = (values) => {
        // props.addPost(values.newPostText);
        console.log('Button pushed');
    };


    return (

        <div className={style.searchBox}>
            <input
                type="text"
                placeholder="Search..."
                onChange={event => {
                    setSearchTerm(event.target.value)
                }}/>
            {JSON_DATA.filter(val => {
                if (searchTerm === "") {
                    return val;
                } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val;
                }
            }).map((val, key) => {
                return <div className={style.searchResults} key={key}>
                    <div className={style.moviePictureWrapper}>
                        <div className={style.inlineDiv}>
                            <img className={style.moviePicture} src={props.poster} alt=""/>
                        </div>
                        <div className={style.inlineDiv + ' ' + style.movieInfo}>
                            <h3 className={style.movieTitle}>
                                {props.title}
                            </h3>
                            <div>
                                {props.director}
                            </div>
                            <div>
                                {props.released}
                            </div>
                            <div>
                                {joinedCastArray}
                            </div>
                            <div>
                                <button className={style.button} onClick={addToFavourites}>Add to Favourites</button>
                            </div>


                        </div>
                    </div>
                </div>
            })}
        </div>










        // <div className={style.movieBlock}>
        //     <div className={style.moviePictureWrapper}>
        //         <div className={style.inlineDiv}>
        //             <img className={style.moviePicture} src={props.imageSrc} alt=""/>
        //         </div>
        //         <div className={style.inlineDiv + ' ' + style.movieInfo}>
        //             <h3 className={style.movieTitle}>
        //                 {props.movieTitle}
        //             </h3>
        //             <div>
        //                 {props.director}
        //             </div>
        //             <div>
        //                 {parsedDate}
        //             </div>
        //             <div>
        //                 {joinedCastArray}
        //             </div>
        //             <div>
        //                 <button className={style.button} onClick={addToFavourites}>Add to Favourites</button>
        //             </div>
        //
        //
        //
        //             {/*<Box component="fieldset" mb={3} borderColor="transparent">*/}
        //             {/*    <Typography component="legend">Film Rating</Typography>*/}
        //             {/*    <Rating*/}
        //             {/*        name="simple-controlled"*/}
        //             {/*        value={value}*/}
        //             {/*        onChange={(event, newValue) => {*/}
        //             {/*            setValue(newValue);*/}
        //             {/*        }}*/}
        //             {/*    />*/}
        //             {/*</Box>*/}
        //
        //         </div>
        //     </div>
        //
        // </div>
    );
}

export default Movie;