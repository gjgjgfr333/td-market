import React, {ChangeEvent, useState} from 'react';
import './search.scss'
import {useLocation, useNavigate} from "react-router-dom";

const Search = ({mobile = false}: {mobile?: boolean}) => {
    const navigation = useNavigate()
    const location = useLocation();
    const [query, setQuery] = useState('')

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        if (location.pathname !== "/search") {
            navigation("/search");
        }
        setQuery(e.target.value)
    }

    return (
        <div className={`search ${mobile && 'search_mobile'}`}>
            <input className={'search-input'} placeholder={'Я ищу...'} onChange={onChangeSearch} value={query}/>
            <button className={'search-button'}>
                <img src="/images/svg/search.svg" alt={'Найти товар'}/>
            </button>
        </div>
    );
};

export default Search;
