import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/diretory.component";

const HomePage = ({ history }) => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
