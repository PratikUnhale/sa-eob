import style from "./DropDownButton.module.scss";

const DropDownButton = (props:any) => {

        return(
            <button className={style['drop-down-button']} onClick={props.onClick}>
                {props.name}
            </button>
        )
}

export default DropDownButton;