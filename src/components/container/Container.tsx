import React, {ReactNode} from 'react';
import './container.scss'

interface IProps {
    children: ReactNode,
    isWideMobile?: boolean
}

const Container = ({children, isWideMobile = false}: IProps) => {
    return (
        <div className={`container ${isWideMobile && 'wide-mobile'}`}>
            {children}
        </div>
    )
};

export default Container;