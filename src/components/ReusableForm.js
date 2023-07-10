import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <form onSubmit={props.formSubmissionHandler}>
      <input type="text" placeholder="MadLibs Title" name="title" />
      <textarea name="sentence1" placeholder="Once upon a time..." rows="4" cols="50" />
      <select name="pos1">
        <option value="noun">Noun</option>
        <option value="verb">Verb</option>
        <option value="adjective">Adjective</option>
        <option value="adverb">Adverb</option>
        <option value="proper-noun">Proper Noun</option>
        <option value="body-part">Body part</option>
      </select>
      <textarea name="sentence2" placeholder="And then..." rows="4" cols="50" />
      <select name="pos2">
        <option value="noun">Noun</option>
        <option value="verb">Verb</option>
        <option value="adjective">Adjective</option>
        <option value="adverb">Adverb</option>
        <option value="proper-noun">Proper Noun</option>
        <option value="body-part">Body part</option>
      </select>
      <textarea name="sentence3" placeholder="What now?" rows="4" cols="50" />
      <select name="pos3">
        <option value="noun">Noun</option>
        <option value="verb">Verb</option>
        <option value="adjective">Adjective</option>
        <option value="adverb">Adverb</option>
        <option value="proper-noun">Proper Noun</option>
        <option value="body-part">Body part</option>
      </select>
      <textarea name="sentence4" placeholder="Next..." rows="4" cols="50" />
      <select name="pos4">
        <option value="noun">Noun</option>
        <option value="verb">Verb</option>
        <option value="adjective">Adjective</option>
        <option value="adverb">Adverb</option>
        <option value="proper-noun">Proper Noun</option>
        <option value="body-part">Body part</option>
      </select>
      <textarea name="sentence5" placeholder="Wrap it up!" rows="4" cols="50" />
      <select name="pos5">
        <option value="noun">Noun</option>
        <option value="verb">Verb</option>
        <option value="adjective">Adjective</option>
        <option value="adverb">Adverb</option>
        <option value="proper-noun">Proper Noun</option>
        <option value="body-part">Body part</option>
      </select>
      <button type="submit">{props.buttonText}</button>
    </form>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonTest: PropTypes.string
}

export default ReusableForm;
