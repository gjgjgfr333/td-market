import React, {useEffect, useState} from 'react';
import './search.scss'
import {useLocation, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/redux";
import {fetchSearch} from "../../store/reducers/search/SearchCreator";

const Search = ({mobile = false}: {mobile?: boolean}) => {
    const dispatch = useAppDispatch()
    const navigation = useNavigate()
    const location = useLocation();
    const [query, setQuery] = useState('')
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const onChangeSearch = (value: string) => {
        if (location.pathname !== "/search") {
            navigation("/search");
        }
        setQuery(value)
    }

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            onChangeSearch(query);
        }
    };

    useEffect(() => {
        const delay = 500; // Задержка в миллисекундах

        // Удаляем предыдущий таймаут, если он есть
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // Создаем новый таймаут для задержки перед отправкой запроса
        const newTimeoutId = setTimeout(() => {
            if (query) {
                dispatch(fetchSearch(query, 1, 20));
            }
        }, delay);

        // Устанавливаем id нового таймаута в состояние
        setTimeoutId(newTimeoutId);
    }, [dispatch, query]);


    return (
        <div className={`search ${mobile && 'search_mobile'}`}>
            <input
                className={'search-input'}
                placeholder={'Я ищу...'}
                onChange={(e) => onChangeSearch(e.target.value)} value={query}
                onKeyDown={handleKeyDown}
            />
            <button className={'search-button'} onClick={() => onChangeSearch(query)}>
                <img src="/images/svg/search.svg" alt={'Найти товар'}/>
            </button>
        </div>
    );
};

export default Search;
