import {createField, Input, Textarea} from "../common/FormControls/FormControls";
import s from "../common/FormControls/FormControls.module.css";

const MovieDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button onClick={() => {}}>Save</button>
            </div>
            {error &&
            <div className={s.formSummeryError}>
                {error}
            </div>}
            <div>
                <div>
                    <b>Full name</b>
                    {createField("Full name", "fullName", [], Input)}
                </div>
                <div>
                    <b>Looking for a job</b>
                    {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
                </div>
                <div>
                    <b>My professional skills</b>
                    {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
                </div>
                <div>
                    <b>About me:</b>
                    {createField("About me", "aboutMe", [], Textarea)}
                </div>
                <div>
                    <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.contact}>
                        <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                    </div>
                })}
                </div>
            </div>
        </form>
    )
}

export default MovieDataForm;