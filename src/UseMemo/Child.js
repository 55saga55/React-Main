import React from 'react'

 function Child(prevMovie,nextMovie) {
    return prevMovie.title === nextMovie.title
    && prevMovie.releaseDate === nextMovie.releaseDate;
  
}
const MemoizedMovie2 = React.memo(Child);