import {createField, Input, Textarea} from "../common/FormControls/FormControls";
import style from "../common/FormControls/FormControls.module.css";
import {Button} from "@material-ui/core";
import {reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../utils/validators";

const maxLength100 = maxLengthCreator(100);
const maxLength50 = maxLengthCreator(50);
const maxLength300 = maxLengthCreator(300);
const maxLength700 = maxLengthCreator(700);
const maxLength5 = maxLengthCreator(5);
const maxLength3 = maxLengthCreator(3);

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
                            {createField("Title", "title", [required, maxLength100], Input)}
                        </div>
                        <div>
                            Tagline
                            {createField("Tagline", "tagline", [maxLength300], Textarea)}
                        </div>
                        <div>
                            Director
                            {createField("Director", "director", [required, maxLength100], Input)}
                        </div>
                        <div>
                            Release date
                            {createField("", "releaseDate", [required], Input, {type: "date"})}
                        </div>
                    </div>

                    <div className={style.secondFormBlock}>
                        <div>
                            Runtime (min)
                            {createField("Runtime (min)", "runtime", [maxLength5], Input, {type: "number"})}
                        </div>
                        <div className={style.formPartMargin}>
                            Genre
                            {createField("Genre", "genre", [required, maxLength50], Input)}
                        </div>
                    </div>

                    <div className={style.thirdFormBlock}>

                        <div className={style.flexWrapBlock}>
                            <div>
                                Country
                                {createField("Country", "country", [required, maxLength50], Input)}
                            </div>
                            <div className={style.formPartMargin}>
                                Language
                                {createField("Language", "language", [required, maxLength50], Input)}
                            </div>
                        </div>

                        <div className={style.flexWrapBlock}>
                            <div className={style.plot}>
                                Plot
                                {createField("Plot", "plot", [required, maxLength700], Textarea)}
                            </div>
                            <div className={style.formPartMargin}>
                                Awards
                                {createField("Awards", "awards", [maxLength300], Textarea)}
                            </div>
                        </div>

                        <strong>Actors</strong>
                        <div className={style.flexWrapBlock}>
                            <div>
                                {Object.keys(movieInfo.actors).map(key => {
                                    return <div key={key}>
                                        {(key[0].toUpperCase() + key.substring(1)).replace('r', 'r ')}
                                        {createField(key, "actors." + key, [maxLength100], Input)}
                                    </div>
                                })}
                            </div>

                            <div className={style.formPartMargin}>
                                Rating
                                {createField("Rating", "rating", [required, maxLength3], Input)}
                            </div>
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