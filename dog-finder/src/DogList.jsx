import React from "react";
import App from "./App";

import { Link } from "react-router-dom";

export default function DogList() {
  return (
    <>
      <h1>Dogs</h1>
      <ul>
        {App.defaultProps.dogs.map((dog, idx) => (
          <li key={idx}>
            <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
