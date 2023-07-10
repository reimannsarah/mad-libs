import React from "react";

function Result(props) {
  const result = props.result;
  return (
  <React.Fragment>
    <p>{result.sentence1} <span><strong>{result.pos1}</strong></span> {result.sentence2} <span><strong>{result.pos2}</strong></span> {result.sentence3} <span><strong>{result.pos3}</strong></span> {result.sentence4} <span><strong>{result.pos4}</strong></span> {result.sentence5} <span><strong>{result.pos5}</strong></span></p>
  </React.Fragment>
  )
}

export default Result;