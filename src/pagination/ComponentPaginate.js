import React, { Component } from "react";
// import ReactDOM from "react-dom";
import axios from "axios";
import Pagination from "react-js-pagination";
// import FullFormFunction from "./form";
// import "./styles.css";

export default class ComponentPaginate extends Component {
  state = {
    data: [],
    activePage: 1,
  };

  componentDidMount() {
    axios
      .get("https://jsonmock.hackerrank.com/api/articles?page=1")
      .then((res) => {
        this.setState({
          data: res.data.data,
        });
      });
  }
  handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    axios
      .get(`https://jsonmock.hackerrank.com/api/articles?page=${pageNumber}`)
      .then((res) => {
        this.setState({
          data: res.data.data,
        });
      });
    this.setState({ activePage: pageNumber });
  };
  render() {
    const allData = this.state.data.map((item) => {
      return <li key={item.id}>{item.title}</li>;
    });
    return (
      <div className="App">
        <p>React pagination test</p>
        <ul>{allData}</ul>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={1}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<ComponentPaginate />, rootElement);
