import React from 'react';
import './styles.scss';

const Pagination = (props) => {
    const {pages, click, current} = props;
    return (
        <ul className="pagination">
            {pages.map(number => (
                <li className={current === number ? "pagination__item active" : "pagination__item"}
                    onClick={click}
                    id={number}
                    key={number}>
                    {number}
                </li>
            ))}
        </ul>
    )
}

export default Pagination;