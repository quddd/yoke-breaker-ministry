import React from "react";
import Backpage from "./image.png";

class Home extends React.Component {
  render() {
    return (
      <div className="homepage" id="home">
        <div className="homepage-info">
          <h1>The Power of the Yoke!</h1>
          <h3>By Carlton Foster</h3>
          <a href="https://www.authorhouse.com/en/bookstore/bookdetails/782120-the-power-of-the-yokes">
            {" "}
            Purchase Now{" "}
          </a>
        </div>
        <img
          src={Backpage}
          alt=" Back page of Book"
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default Home;
