import style from "./Button.module.scss";

const Button = (props:any) => {

        return(
            <button onClick={props.onClick} className={style[props.type]}>
                {props.name}
            </button>
        )
}

export default Button;