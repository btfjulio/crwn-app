import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${isGoogleSignIn && "google-sign-in"}`}
      type="submit"
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
