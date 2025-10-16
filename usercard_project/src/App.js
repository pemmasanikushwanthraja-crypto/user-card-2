import React from "react";
import UserCard from "./UserCard";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Simple Profile Card</h1>
      <UserCard
        name="Kushwant"
        age={18}
        bio="A creative YouTuber and gamer from Tenali!"
      />
    </div>
  );
}

export default App;