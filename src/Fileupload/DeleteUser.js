import axios from "axios";
import React from "react";

export default function DeleteUser() {
  const del = () => {
    var token = JSON.parse(localStorage.getItem("data")).tokens.refreshToken;
    axios
      .delete("http://localhost:8002/api/user/me", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((y) => {
        console.log(y);
      });
  };

  return (
    <div>
      <button type="submit" onClick={del}>
        Delete-User
      </button>
    </div>
  );
}
