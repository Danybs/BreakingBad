import React from "react";

const SimpleList = ({ subList }) => {
  return (subList || []).map((item) => {
    return <p>{item}</p>;
  });
};

export default SimpleList;
