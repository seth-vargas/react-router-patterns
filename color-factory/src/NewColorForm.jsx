import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NewColorForm({ setColors }) {
  const [color, setColor] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const newColor = formJson.color;

    setColors((oldColors) => [...oldColors, newColor]);

    navigate("/colors");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="color">Color: </label>
        <input
          type="text"
          name="color"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <Link to="/colors">Cancel</Link>
    </>
  );
}
