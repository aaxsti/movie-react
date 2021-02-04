import style from './SearchBar.module.css';
import JSON_DATA from '../../MOCK_DATA.json';
import {useState} from "react";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className={style.searchBox}>
            <input
                type="text"
                placeholder="Search..."
                onChange={event => {
                    setSearchTerm(event.target.value)
                }}/>
            {JSON_DATA.filter(val => {
                if (searchTerm === "") {
                    return val;
                } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val;
                }
            }).map((val, key) => {
                return <div className={style.searchResults} key={key}>
                    <p>{val.title}</p>
                </div>
            })}
        </div>
    );
}

export default SearchBar;