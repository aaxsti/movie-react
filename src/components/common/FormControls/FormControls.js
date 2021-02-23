import {Field} from "redux-form";
import style from "./FormControls.module.css";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea className={style.textarea + ' ' + style.fieldStyle} {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    console.log(props.input)
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input className={style.input + ' ' + style.fieldStyle} {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => {
    return (
        <div>
            <Field placeholder={placeholder}
                   name={name}
                   component={component}
                   validate={validators}
                   {...props}
            /> {text}
        </div>
    )
}
