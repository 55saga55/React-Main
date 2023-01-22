import axios from "axios";
import React, { useState, useEffect } from "react";

export default function DisplayCategory() {
  const [rec, setRec] = useState();

  useEffect(() => {
    axios.get("http://localhost:8002/api/category").then((y) => {
      console.log(y.data.categories);
      setRec(y.data);
    });
  }, []);

  // React SDK transformations are created using @cloudinary/url-gen.
  // new CloudinaryImage(
  //   "https://upload.wikimedia.org/wikipedia/commons/1/13/Benedict_Cumberbatch_2011.png"
  // ).setDeliveryType("fetch");

  return (
    <div className="container">
      <h1 className="text-center my-2">Catagories</h1>
      <div className="row row-cols-3 g-4">
        {rec?.categories.map((element, index) => {
          return (
            <div key={index}>
              <div className="col align-items-stretch">
                <div className="card ">
                  <img src={element.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-center">{element.name}</h5>
                    <p className="card-text text-center">
                      {element.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
