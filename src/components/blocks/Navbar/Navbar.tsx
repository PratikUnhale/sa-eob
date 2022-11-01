
import DropDownButton from "../../ui/DorpDownButton/DropDownButton";
import style from "./Navbar.module.scss"

const Navbar = (props: any) => {
    return <div className={style.navbar}>
        <div className={style.space}></div>
        <div className={style.title}>Clerk Dashboard</div>
        <div className={style['profile-menu']}>
            <div className={style['profile-button']}>
                <DropDownButton name="username >" onClick={props.profileToggleCallback} />
            </div>
        </div>
    </div>
}

export default Navbar;