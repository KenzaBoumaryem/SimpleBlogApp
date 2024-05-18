import React from 'react';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';

const Pagination = ({ pageNumber, setPageNumber, totalItem, perPage, showItem }) => {
    const totalPage = Math.ceil(totalItem / perPage);
    let startPage = pageNumber - Math.floor(showItem / 2);
    startPage = Math.max(startPage, 1); 
    let endPage = startPage + showItem - 1;

    if (endPage > totalPage) {
        endPage = totalPage;
        startPage = Math.max(totalPage - showItem + 1, 1);
    }

    if (totalPage <= 1) return null; 

    return (
        <>
            <div className="tw-flex tw-flex-col tw-items-center">
                <div className="tw-inline-flex tw-mt-2 xs:tw-mt-0">
                    <button 
                        onClick={() => setPageNumber(pageNumber - 1)} 
                        disabled={pageNumber === 1} 
                        className="tw-flex tw-items-center tw-justify-center tw-px-3 tw-h-8 tw-text-sm tw-font-medium tw-text-white tw-bg-gradient-to-r tw-from-blue-500 tw-via-blue-600 tw-to-blue-700 tw-rounded-s tw-hover:bg-gray-900 dark:tw-bg-gray-800 dark:tw-border-gray-700 dark:tw-text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <BsChevronDoubleLeft className="tw-w-3.5 tw-h-3.5 tw-me-2 rtl:tw-rotate-180" aria-hidden="true" />
                        
                    </button>
                    {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(page => (
                        <button 
                            key={page} 
                            onClick={() => setPageNumber(page)} 
                            className={`tw-flex tw-items-center tw-justify-center tw-px-3 tw-h-8 tw-text-sm tw-font-medium tw-text-white tw-bg-gradient-to-r tw-from-blue-500 tw-via-blue-600 tw-to-blue-700 tw-border-0 tw-border-s tw-border-gray-700 tw-rounded-e tw-hover:bg-gray-900 dark:tw-bg-gray-800 dark:tw-border-gray-700 dark:tw-text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${pageNumber === page ? 'active' : ''}`}
                        >
                            {page}
                        </button>
                    ))}
                    <button 
                        onClick={() => setPageNumber(pageNumber + 1)} 
                        disabled={pageNumber === totalPage} 
                        className="tw-flex tw-items-center tw-justify-center tw-px-3 tw-h-8 tw-text-sm tw-font-medium tw-text-white tw-bg-gradient-to-r tw-from-blue-500 tw-via-blue-600 tw-to-blue-700 tw-border-0 tw-border-s tw-border-gray-700 tw-rounded-e tw-hover:bg-gray-900 dark:tw-bg-gray-800 dark:tw-border-gray-700 dark:tw-text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        
                        <BsChevronDoubleRight className="tw-w-3.5 tw-h-3.5 tw-ms-2 rtl:tw-rotate-180" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </>
    );
}
export default Pagination;