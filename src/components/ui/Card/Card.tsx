import style from "./Card.module.scss";

const Card = (props:any) => {
        return <div className={style.card}>{props.content}</div>
}

export default Card;