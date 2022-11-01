import style from "./SearchBar.module.scss";

const SearchBar = () => {
    return(
        <input type="text" className={style['search-bar']} placeholder="Search Offers"></input>
    )
}

export default SearchBar;