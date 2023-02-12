import React from 'react';
import './cover.scss'

interface ICover {
    callback: () => void;
    zIndex?: number
}

const Cover = ({callback ,zIndex = 10}: ICover) => {
    return (
        <div className={'cover'} style={{zIndex: zIndex}} onClick={callback}/>
    );
};

export default Cover;