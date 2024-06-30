"use client";
import React from "react";
import PropTypes from "prop-types";

const Error = (error: any) => {
  console.log(error);
  //return <div>there was an error...</div>;
  return <div>{error.error.message}</div>;
};

export default Error;
