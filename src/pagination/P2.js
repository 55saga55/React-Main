import React from 'react'

export default function P2({postPerPage, totalPost,paginate}) {
    const pageNumbers = [];
    for(let i=1; i<=Math.ceil(totalPost/postPerPage); i++){
        pageNumbers.push(i);
    }
  return (
    <>
   
    <nav >
    <div className='d-flex justify-content-center'>
        <ul className='pagination '>
            {pageNumbers.map(num => (
                <li key={num} className="page-item">
                    <a onClick={() => paginate(num)} href="!#" className='page-link'>
                        {num}
                        
                    </a>
                    
                </li>
            ))}
        </ul>
    </div>
</nav>
</>
  )
}
