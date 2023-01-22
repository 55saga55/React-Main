import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
// import Button from './Button';
import P2 from "./P2";

function P1() {
  const [value, setValue] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };

  useEffect(() => {
    axios
      .get(`https://jsonmock.hackerrank.com/api/articles?page=${currentPage}`)
      .then((y) => {
        setValue(y.data);
      });
  }, [value]);

  const totalPagePost = value.per_page;
  const totalpost = value.total;

  return (
    <div className="App">
      {
        <div className="container d-flex flex-wrap justify-content-between my-4">
          {value?.data?.map((x) => {
            return (
              <>
                <div className="card my-3" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{x.author}</h5>
                    <h5 className="card-title">{x.title}</h5>
                    <h5 className="card-title">{x.num_comments}</h5>

                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      }
      <P2
        postPerPage={totalPagePost}
        totalPost={totalpost}
        paginate={paginate}
      />
    </div>
  );
}

export default P1;
