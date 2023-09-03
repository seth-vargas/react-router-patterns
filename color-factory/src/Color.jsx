import React, { useEffect } from "react";
import { useParams, redirect, NavLink, useNavigate } from "react-router-dom";

export default function Color({ colors }) {
  const { color } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!colors.includes(color)) {
      navigate("/colors");
    }
  });

  return (
    <>
      <div
        style={{
          backgroundColor: color,
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NavLink to={"/colors"} className="white">
          Go Home
        </NavLink>
      </div>
    </>
  );
}
