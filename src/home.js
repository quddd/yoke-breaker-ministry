import React from "react";
import Backpage from "./image.png";

class Home extends React.Component {
  render() {
    return (
      <div className="homepage">
        <img
          src={Backpage}
          alt=" Back page of Book"
          style={{ height: "100vh" }}
        />
        <div className="homepage-info">
          <h1>The Power of the Yoke!</h1>
          <p>
            {" "}
            This is where the description of the book will go.
            <br /> A short description.
          </p>
          <button> Purchase Now </button>
        </div>
      </div>
    );
  }
}

export default Home;
