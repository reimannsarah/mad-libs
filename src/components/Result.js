import React from "react";
import Typewriter from "./Typewriter";

function Result(props) {
  const result = props.result;
  const text = `${result.sentence1} ${result.pos1} ${result.sentence2} ${result.pos2} ${result.sentence3} ${result.pos3} ${result.sentence4} ${result.pos4} ${result.sentence5} ${result.pos5}`
  return (
  <div className="result">
    <Typewriter text={text} />
    <p className="back" onClick={props.onBackClick}>&#8672; Back</p>
  </div>
  )
}

export default Result;