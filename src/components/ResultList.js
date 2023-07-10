import React from "react";
import Result from "./Result";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function ResultList(props) {
  return (
    <React.Fragment>
      {props.resultList.map((result) => {
        return (
          <div key={result.id} onClick={() => props.onResultSelection(result.id)}>
            <p>{result.title}</p>
          </div>
        )
      })}
    </React.Fragment>
  );
}

ResultList.propTypes = {
  onResultSelection: PropTypes.func,
  resultList: PropTypes.array
}

export default ResultList;