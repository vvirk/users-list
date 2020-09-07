import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { setCurrentPage } from '../../actions/index';
import { Btn } from '../commonComponents/Btn';
import { setPageNumbers } from '../../utils/setPageNumbers';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
    const [pages, setPages] = useState();
    const separator = '...';

    useEffect(() => {
        setPages(setPageNumbers(totalPages, currentPage, separator));
    }, [currentPage, totalPages]);

    const handleCurrentPage = page => page !== currentPage ? setCurrentPage(page) : null;

    const setIsActive = (page, currentPage) => page === currentPage ? 'isActive' : null;

    return(
        <div className='pagination-wrap'>
            {currentPage > 1 &&
                <Btn
                    extraClass='paginationBtn'
                    handleClick={() => handleCurrentPage(currentPage - 1)}
                    title={currentPage - 1} desc='&#9668;'
                />
            /*<button className='paginationBtn' onClick={() => handleCurrentPage(currentPage - 1)} title={currentPage - 1}>&#9668;</button>*/}
            <ul className='pagination'>
                {pages && pages.map((page, index) => 
                    <li key={index}>
                        {page === separator
                            ? <span className='separator'>{page}</span>
                                : <Btn extraClass={`paginationBtn ${setIsActive(page, currentPage)}`} handleClick={() => handleCurrentPage(page)} desc={page} />}
                    </li>)}
            </ul>
            {currentPage < totalPages &&
                <Btn
                    extraClass='paginationBtn'
                    handleClick={() => handleCurrentPage(currentPage + 1)}
                    title={currentPage + 1} desc='&#9658;'
                />/*<button className='paginationBtn' onClick={() => handleCurrentPage(currentPage + 1)} title={currentPage + 1}>&#9658;</button>*/}
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