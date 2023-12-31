import React from "react";
import PropTypes from "prop-types";

function ResultList(props) {
  let trashcan = 
  <svg className="trashcan" 
  xmlns="http://www.w3.org/2000/svg" 
  x="0px" 
  y="0px" 
  viewBox="0 0 25 24.8" 
  data-ember-action="" 
  data-ember-action-1015="1015">
  <g className="trashcan-closed">
    <path d="M6.8,8.8h11L17,22.6
            H7.6L6.8,8.8z 
            M4.9,7l1,17.4h12.8
            l1-17.4
            H4.9z"
            ></path>
    <polygon points="13.6,10.3 13.1,21.2 14.9,21.2 15.4,10.3 "></polygon>
    <polygon points="11.5,21.2 11,10.3 9.2,10.3 9.7,21.2 "></polygon>
    <path d="M20.4,4h-4.8l-0.5-1.6
            H9.5L9,4
            H4.2
            L3.5,8.6h17.6
            L20.4,4z 
            
            M9.9,3.2h4.8
            L14.9,3.9h-5.2z
            
            M5.6,6.7l0.2-1 h13l0.2,1
            H5.6z"></path>
  </g>
</svg>
  return (
    <div className="results-guy">
      <h1>Completed MadLibs</h1>
      {props.resultList.map((result) => {
        return (
          <div key={result.id} >
            <p><span className="list-result" onClick={() => props.onResultSelection(result.id)}>{result.sentence1} {result.pos1}...</span><span><button className="delete-rslt-btn" onClick={() => props.onDeleteClick(result.id)}>{trashcan}</button></span></p>
            
          </div>
        )
      })}
    </div>
  );
}

ResultList.propTypes = {
  onResultSelection: PropTypes.func,
  resultList: PropTypes.array
}

export default ResultList;