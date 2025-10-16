import React from "react";

function UserCard({ name, age, bio }) {
  const cardStyle = {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "250px",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif"
  };

  const nameStyle = { color: "#0077cc", fontSize: "22px", fontWeight: "bold" };
  const ageStyle = { color: "#333", fontSize: "18px" };
  const bioStyle = { color: "#666", fontSize: "16px" };

  return (
    <div style={cardStyle}>
      <h2 style={nameStyle}>{name}</h2>
      <p style={ageStyle}>Age: {age}</p>
      <p style={bioStyle}>{bio}</p>
    </div>
  );
}

export default UserCard;