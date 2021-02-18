import {createField, Input, Textarea} from "../common/FormControls/FormControls";
import style from "../common/FormControls/FormControls.module.css";
import {Button} from "@material-ui/core";
import {reduxForm} from "redux-form";
import React from "react";

const MovieDataForm = ({handleSubmit, movieInfo, error}) => {
    return (
        <div className={style.formWrapper}>
            <form onSubmit={handleSubmit}>
                {error &&
                <div>
                    {error}
                </div>}
                <div className={style.formMovieInfoBlock}>

                    <img className={style.formMoviePicture}
                         src={movieInfo?.poster}
                         alt={movieInfo?.title}/>

                    <div className={style.rightFormBlock}>
                        <div>
                            Title
                            {createField("Title", "title", [], Input)}
                        </div>
                        <div>
                            Tagline
                            {createField("Tagline", "tagline", [], Textarea)}
                        </div>
                        <div>
                            Director
                            {createField("Director", "director", [], Input)}
                        </div>
                        <div>
                            Release date
                            {createField("", "releaseDate", [], Input, {type: "date"})}
                        </div>
                    </div>

                    <div className={style.secondFormBlock}>
                        <div>
                            Runtime (min)
                            {createField("Runtime (min)", "runtime", [], Input, {type: "number"})}
                        </div>
                        <div className={style.genre}>
                            Genre
                            {createField("Genre", "genre", [], Input)}
                        </div>
                    </div>

                    <div className={style.thirdFormBlock}>

                        <strong>Actors</strong>
                        <div className={style.actors}>
                            {Object.keys(movieInfo.actors).map(key => {
                            return <div key={key}>
                                {(key[0].toUpperCase() + key.substring(1)).replace('r', 'r ')}
                                {createField(key, "actors." + key, [], Input)}
                            </div>
                        })}
                        </div>
                        <div>
                            Country
                            {createField("Country", "country", [], Input)}
                        </div>
                        <div>
                            Language
                            {createField("Language", "language", [], Input)}
                        </div>
                        <div className={style.plot}>
                            Plot
                            {createField("Plot", "plot", [], Textarea)}
                        </div>
                        <div>
                            Awards
                            {createField("Awards", "awards", [], Textarea)}
                        </div>
                        <div>
                            Rating
                            {createField("Rating", "rating", [], Input)}
                        </div>

                        <div className={style.buttonWrapper}>
                            <Button variant="contained" onClick={() => {
                            }}>Save</Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

const MovieDataFormReduxForm = reduxForm({form: 'edit-movie-info'})(MovieDataForm);

export default MovieDataFormReduxForm;