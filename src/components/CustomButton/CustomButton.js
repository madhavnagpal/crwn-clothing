import React from "react";
import "./CustomButton.scss";

function CustomButton({ children, isGoogleSignIn, ...restProps }) {
  return (
    <button
      className={`custom-button ${isGoogleSignIn && "google-sign-in"}`}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
