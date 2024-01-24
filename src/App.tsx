import React from "react";
import "./App.css";

const App = () => {
  const name = "Programming Hero";
  const nameArr = name.split("");
  return (
    <div className="main">
      {/* <div className="box-1">box-1</div> */}
      {/* <h1 className="text-2xl">something cool</h1> */}
      {/* button */}
      {/* <button className="btn">Hover Me</button> */}
      {/* loader */}
      {/* <div className="loading">
        <div className="glass"></div>
        <div className="box"></div>
      </div> */}
      {/* clip-path */}
      {/* <div className="card">
        <h1 className="text-xl font-bold">Heading</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
          doloribus nulla deserunt ipsum ducimus dolore officia ipsam nobis
          veritatis! At necessitatibus ipsa placeat quod dolor. Expedita veniam
          cumque commodi labore.
        </p>
      </div> */}

      {/* staggered*/}
      <div className="container">
        {nameArr.map((item, i) => (
          <span className="alphabet" style={{ transitionDelay: `${i * 30}ms` }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default App;
