import React from 'react'

export const Page = ({ postPerPage, totalPost, paginate }) => {

    const pageNum = [];
    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNum.push(i);
    }
   ;
    return (

        <nav >
            <div className='d-flex justify-content-center'>
                <ul className='pagination '>
                    {pageNum.map(num => (
                        <li key={num} className="page-item">
                            <a onClick={() => paginate(num)} href="!#" className='page-link'>
                                {num}
                                
                            </a>
                            
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
