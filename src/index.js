import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));

const CustomStarComponent = () => {
  const [rating, setRating] = useState(2);

  return (
    <>
      <StarRating
        maxRating={5}
        messages={["Bad", "Not Bad", "Okay", "Good", "Amazing"]}
        size={24}
        defaultRating={rating}
        className="test"
        onSetRating={setRating}
      />
      <p style={{ fontSize: "14px", marginTop: "10px" }}>
        This was rated {rating} stars
      </p>
    </>
  );
};

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} />
    <CustomStarComponent />
  </React.StrictMode>
);
