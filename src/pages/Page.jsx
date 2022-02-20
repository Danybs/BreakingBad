import React, { useEffect } from "react";
import "regenerator-runtime/runtime";

const Page = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <main className="container">{props.children}</main>;
};

export default Page;
