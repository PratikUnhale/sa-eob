// import Button from "../ui/Button";
import style from "./SideFloater.module.scss";

// const Item = () => {
//     return <div>item</div>
// }

const SideFloater = (props: any) => {
    return <div className={style[props.show ? 'side-floater' : 'side-floater-hidden']}>
        <div className={style['floater-header']}>
            <button className={style['close-button']} onClick={props.toggle}>X</button>
            <div className={style['header-title']}>{props.content}</div>
        </div>
    </div>
}

export default SideFloater;