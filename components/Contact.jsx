import React from "react";
import { useParams } from "react-router-dom";

export default function Contact() {
  const params = useParams();
  console.log(params);
  return <h1 style={{ textAlign: "center" }}>Contact Us</h1>;
}
