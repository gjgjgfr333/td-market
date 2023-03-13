import React from 'react';
import './container.scss'
import {IChildren} from "../../models/IChildren";

const Container = ({children}: IChildren) => {
    return (
        <div className={'container'}>
            {children}
        </div>
    )
};

export default Container;