import React, {useState} from 'react';
import './menu.scss'

const Menu = () => {
    const [isPressed, setIsPressed] = useState(false)

    return (
        <div>
            <div className={`hamburger ${isPressed && 'active'}`} onClick={() => setIsPressed(!isPressed)}>
                <div className={`hamburger__item line-1 ${isPressed && 'active'}`}/>
                <div className={'hamburger__item line-2'}/>
                <div className={'hamburger__item line-3'}/>
            </div>
        </div>
    );
};

export default Menu;