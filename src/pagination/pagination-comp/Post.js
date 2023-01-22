import React from "react";

export const Post = ({ value }) => {
  return (
    <div>
      {
        <div className="container d-flex flex-wrap justify-content-between my-4">
          {value.map((x) => {
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
    </div>
  );
};
