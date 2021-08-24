import React from "react";
import "./CustomButton.scss";

function CustomButton({ children, isGoogleSignIn, inverted, ...restProps }) {
  return (
    <button
      className={`custom-button ${isGoogleSignIn && "google-sign-in"} ${
        inverted && "inverted"
      }`}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
