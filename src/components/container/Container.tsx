import React, {ReactNode} from 'react';
import './container.scss'

interface Props {
    children?: ReactNode
    // any props that come into the component
}

const Container = ({children}: Props) => {
    return (
        <div className={'container'}>
            {children}
        </div>
    )
};

export default Container;