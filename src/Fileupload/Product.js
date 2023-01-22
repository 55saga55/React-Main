import { useState } from "react";
import React from "react";
import axios from "axios";

export default function Product() {
  const [data, setData] = useState({
    mainImage: "",
    images: "",
    name: "",
    description: "",
    category: "",
    price: "",
    priceDiscount: "",
    colors: "",
    sizes: "",
    quantity: "",
    sold: "",
    isOutOfStock: "",
  });
  const changeSet = (e) => {
    if (e.target.type === "file")
      setData({ ...data, [e.target.name]: e.target.files[0] });
    else setData({ ...data, [e.target.name]: e.target.value });
  };

  const saveProduct = (e) => {
    e.preventDefault();
    var token = JSON.parse(localStorage.getItem("data")).tokens.refreshToken;
    var formData = new FormData();
    formData.append("mainImage", data.mainImage);
    formData.append("images", data.images);
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("priceDiscount", data.priceDiscount);
    formData.append("colors", data.colors);
    formData.append("sizes", data.sizes);
    formData.append("quantity", data.quantity);
    formData.append("sold", data.sold);
    formData.append("isOutOfStock", data.isOutOfStock);

    axios
      .post("http://localhost:8002/api/product", formData, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((y) => {
        console.log(y);
      });
  };

  return (
    <div className="container my-2">
      <form onSubmit={saveProduct}>
        <div className="form-group col-md-4 ">
          <label htmlFor="" className="my-2">
            Mainimage
          </label>
          <input
            type="file"
            name="mainImage"
            className="form-control"
            onChange={changeSet}
          />
        </div>
        <div className="form-group col-md-4 ">
          <label htmlFor="" className="my-2">
            images
          </label>
          <input
            type="file"
            name="images"
            className="form-control"
            onChange={changeSet}
            multiple="multiple"
          />
        </div>

        <div className="form-group col-md-4">
          <label htmlFor="" className="my-2">
            Name:
          </label>
          <input
            type="text"
            name="name"
            onChange={changeSet}
            className="form-control"
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="" className="my-2">
            Description:
          </label>
          <input
            type="text"
            name="description"
            onChange={changeSet}
            className="form-control"
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="" className="my-2">
            Category:
          </label>
          <input
            type="text"
            name="category"
            onChange={changeSet}
            className="form-control"
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="" className="my-2">
            Price:
          </label>
          <input
            type="number"
            name="price"
            onChange={changeSet}
            className="form-control"
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="" className="my-2">
            PriceDiscount:
          </label>
          <input
            type="number"
            name="priceDiscount"
            onChange={changeSet}
            className="form-control"
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="" className="my-2">
            Colors:
          </label>
          <input
            type="text"
            name="colors"
            onChange={changeSet}
            className="form-control"
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="" className="my-2">
            Sizes:
          </label>
          <input
            type="text"
            name="sizes"
            onChange={changeSet}
            className="form-control"
          />
        </div>

        <div className="form-group col-md-4">
          <label htmlFor="" className="my-2">
            Quantity:
          </label>
          <input
            type="number"
            name="quantity"
            onChange={changeSet}
            className="form-control"
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="" className="my-2">
            Sold:
          </label>
          <input
            type="number"
            name="sold"
            onChange={changeSet}
            className="form-control"
          />
        </div>
        {/* <div className='form-group col-md-4' >
                    <label htmlFor="" className='my-2'>IsOutOfStock:</label>
                    <input type="text" name='isOutOfStock' onChange={changeSet}  className='form-control'/>
                </div> */}

        <select
          name="isOutOfStock"
          onChange={changeSet}
          className="form-control"
        >
          <option value="default"></option>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>

        <div>
          <input
            type="submit"
            onClick={saveProduct}
            value="save"
            className="btn btn-primary my-2"
          />
        </div>
      </form>
    </div>
  );
}
