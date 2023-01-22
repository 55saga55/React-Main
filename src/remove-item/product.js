import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactStars from "react-rating-stars-component";

function Product() {
  const [value, setData] = useState([]);
  const [load, setLoad] = useState(true);

  // console.log(value);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((y) => {
      setData(y.data);
      // console.log(y);
    });
  }, []);

  const name = () => {
    //  const sortData = [].concat(value).sort((a,b)=>{return a.title - b.title});
    setLoad(!load);
    load
      ? setData(
          [...value].sort(function compare(a, b) {
            if (a.title < b.title) {
              return -1;
            } else {
              return 1;
            }
          })
        )
      : setData(
          [...value].sort(function compare(a, b) {
            if (a.title < b.title) {
              return 1;
            } else {
              return -1;
            }
          })
        );
  };
  const price = () => {
    //  const sortData = [].concat(value).sort((a,b)=>{return a.title - b.title});
    setLoad(!load);
    load
      ? setData(
          [...value].sort(function compare(a, b) {
            if (a.price < b.price) {
              return -1;
            } else {
              return 1;
            }
          })
        )
      : setData(
          [...value].sort(function compare(a, b) {
            if (a.price < b.price) {
              return 1;
            } else {
              return -1;
            }
          })
        );
  };

  return (
    <>
      <div className="container">
        <button
          type="button"
          className="btn btn-outline-primary mx-3 my-3"
          onClick={() => {
            name();
          }}
        >
          {load ? <h5>Name &uarr;</h5> : <h5>Name &darr;</h5>}
        </button>
        <button
          type="button"
          className="btn btn-outline-primary mx-3 my-3"
          onClick={() => {
            price();
          }}
        >
          {load ? <h5>Price &uarr;</h5> : <h5>Price &darr;</h5>}
        </button>
      </div>
      <div className="container">
        <div className="d-flex flex-wrap" id="test">
          {value.map((element) => {
            return (
              <>
                <div className="card col-6 my-3">
                  <img
                    src={element.image}
                    alt=""
                    className="img-thumbnail"
                    style={{ maxHeight: "20rem" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Id: {element.id}</h5>
                    <h5 className="card-title">Category: {element.category}</h5>
                    <h5 className="card-title">Title: {element.title}</h5>
                    <p className="card-text">{element.description}</p>
                    <h5 className="card-title">Price: {element.price}</h5>
                    <ReactStars
                      count={5}
                      value={element.rating.rate}
                      isHalf={true}
                      activeColor={"#ffd700"}
                      size={28}
                      edit={false}
                    />
                    <h5 className="card-title">{element.rating.rate}</h5>

                    {/* <button type="button" className="btn btn-outline-warning mx-3" onClick={() =>reloadAll()}>Reload-Page</button> */}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Product;
