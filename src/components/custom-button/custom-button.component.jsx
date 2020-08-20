import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`custom-button 
        ${isGoogleSignIn && "google-sign-in"}
        ${inverted && "inverted"}
        `}
      type="submit"
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
