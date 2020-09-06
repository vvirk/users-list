import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { setCurrentPage } from '../../actions/index';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
    const [pages, setPages] = useState();
    useEffect(() => {
    let pageNumbers = [];
    if(currentPage <= 3) {
        for(let i = 0; i < 3; i+=1) {
            pageNumbers.push(i);
        }
    }
    setPages(pages);
    }, []);

    const handleCurrentPage = page => page !== currentPage ? setCurrentPage(page) : null;

    return(
        <div>
            <ul>
                {pages && pages.map((page, index) => <li key={index}>
                    <button onClick={handleCurrentPage(page)}>{page}</button>
                </li>)}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    currentPage: state.currentPage,
    totalPages: state.totalPages
});

const mapDispatchToProps = {
    setCurrentPage
};

const connectedPagination = connect(mapStateToProps, mapDispatchToProps)(Pagination);
export { connectedPagination as Pagination };