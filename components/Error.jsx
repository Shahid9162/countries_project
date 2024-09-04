import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error);
  const styles = {
    color: "red",
    backgroundColor: "#f8d7da",
    padding: "10px",
    borderradius: "5px",
    textalign: "center",
  };

  return <div style={styles}>Something went wrong. {error.status}</div>;
}
