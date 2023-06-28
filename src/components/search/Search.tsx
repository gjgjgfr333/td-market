import React from 'react';
import './search.scss'

const Search = ({mobile = false}: {mobile?: boolean}) => {
    return (
        <div className={`search ${mobile && 'search_mobile'}`}>
            <input className={'search-input'} placeholder={'Я ищу...'}/>
            <button className={'search-button'}>
                <img src="/images/svg/search.svg" alt={'Найти товар'}/>
            </button>
        </div>
    );
};

export default Search;
