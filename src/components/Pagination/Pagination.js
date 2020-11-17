import React from 'react';

const Pagination = (props) => {
    const {pages, click} = props;
    return (
        <ul>
            {pages.map(number => (
                <li onClick={click} id={number} key={number}>{number}</li>
            ))}
        </ul>
    )
}

export default Pagination;