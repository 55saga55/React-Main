// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from "react";
import { Post } from "./pagination-comp/Post";
import { Page } from "./pagination-comp/Page";

function App() {
  const [value, setValue] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);

  // https://jsonmock.hackerrank.com/api/articles?page=1
  // https://jsonplaceholder.typicode.com/posts
  const ran = Math.floor(Math.random() * 6);

  useEffect(() => {
    fetch(`https://jsonmock.hackerrank.com/api/articles?page=${ran}`)
      .then((response) => response.json())
      .then((x) => {
        setValue(x.data);
      });
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = value?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNum) => setCurrentPage(pageNum);

  return (
    <div>
      <h1 className="text-center">This is posts</h1>
      <Post value={currentPosts} />
      <Page
        postPerPage={postPerPage}
        totalPost={value.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
