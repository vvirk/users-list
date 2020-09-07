import React from 'react';

export const Btn = ({ handleClick, desc, extraClass, title }) => (
    <button
        className={`btn ${extraClass}`}
        onClick={handleClick}
        title={title || ''}
    >
        {desc}
    </button>
);