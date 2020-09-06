import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { setCurrentPage } from '../../actions/index';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
    const [pages, setPages] = useState();
    const separator = '...';
    useEffect(() => {
    let pageNumbers = [];
    if(totalPages < 6) {
        for(let i = 1; i < 6; i += 1) {
            pageNumbers.push(i);
        }
    } else {
        if(currentPage <= 3){
            for(let i = 1; i <= 4; i += 1) {
                pageNumbers.push(i);
            }
            pageNumbers.push(separator, totalPages);
        } else if (currentPage > 3 && currentPage < totalPages - 2) {  
            pageNumbers.push(1, separator, currentPage - 1, currentPage, currentPage + 1, separator, totalPages);
        } else if (currentPage > 3 && currentPage > totalPages - 3) {
            pageNumbers.push(1, separator);
            for(let i = totalPages - 3; i <= totalPages; i += 1) {
                pageNumbers.push(i);
            }
        }
    }
    setPages(pageNumbers);
    }, [currentPage, totalPages]);

    const handleCurrentPage = page => page !== currentPage ? setCurrentPage(page) : null;

    return(
        <div>
            <ul>
                {pages && pages.map((page, index) => 
                    <li key={index}>
                        {page === separator
                            ? <span>{page}</span>
                                : <button onClick={() => handleCurrentPage(page)}>{page}</button>}
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