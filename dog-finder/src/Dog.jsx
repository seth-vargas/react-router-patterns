import React from "react";
import { useParams, Link } from "react-router-dom";
import App from "./App";

export default function Dog() {
  const { name } = useParams();
  const dogDataArray = App.defaultProps.dogs;

  for (let dog of dogDataArray) {
    if (dog.name === name) {
      return (
        <div>
          <p>
            {dog.name} is {dog.age} years old
          </p>
          <img src={dog.src} alt="" style={{ width: "250px" }} />
          <p>Some facts about {dog.name}:</p>
          <ol>
            {dog.facts.map((fact, idx) => (
              <li key={idx}>{fact}</li>
            ))}
          </ol>
          <Link to={"/dogs"}>Go Home</Link>
        </div>
      );
    }
  }
}
