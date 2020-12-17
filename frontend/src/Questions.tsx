import React from "react";

const Questions = ({ match }: any) => {
  return <h2>Questions {match.params.id}</h2>;
};

export default Questions;
