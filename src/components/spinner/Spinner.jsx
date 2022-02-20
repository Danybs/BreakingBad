import React from "react";
import loader from "../../assets/img/oval.svg";
import Page from "../../pages/Page";

const Spinner = () => {
  return (
    <Page>
      <img
        src={loader}
        style={{
          width: "100px",
          margin: "auto",
          display: "block",
          height: "100%",
        }}
        alt="Loading..."
      />
    </Page>
  );
};

export default Spinner;
