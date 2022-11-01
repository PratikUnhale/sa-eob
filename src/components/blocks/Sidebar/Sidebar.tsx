import style from "./Sidebar.module.scss"

const SideBarItem = (props: any) => {
    return <div className={style['side-bar-item']}>{props.name}</div>
}

const SideBar = (props: any) => {

    let menuItems = props.items.map((s: string) => <SideBarItem name={s} />)

    return <div className={style.sidebar}>
        {menuItems}
    </div>
}

export default SideBar;