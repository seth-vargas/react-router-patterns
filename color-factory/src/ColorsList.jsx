import React from "react";
import { NavLink } from "react-router-dom";

export default function ColorsList({ colors }) {
  return (
    <>
      <div className="heading">
        <h3 className="white">Welcome to the color factory</h3>
        <NavLink to={"/colors/new"} className="white">
          Add a color
        </NavLink>
      </div>
      <ul>
        {colors.map((color, idx) => (
          <li key={idx}>
            <NavLink to={`/colors/${color}`}>{color}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
