import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const dropDownMenu = (
    <>
      <option value="" disabled selected>Select and option</option>
      <option value="noun">Noun</option>
      <option value="plural-noun">Plural Noun</option>
      <option value="verb">Verb</option>
      <option value="verb-gerund">Verb, gerund</option>
      <option value="verb-past-tense">Verb, past tense</option>
      <option value="adjective">Adjective</option>
      <option value="adverb">Adverb</option>
      <option value="proper-noun">Proper Noun</option>
      <option value="body-part">Body part</option>
    </>
  );
  return (
    <form onSubmit={props.formSubmissionHandler}>
      <input type="text" placeholder="Click here to add title" name="title" required/>
      <textarea name="sentence1" placeholder="Once upon a time..." rows="4" cols="50" required />
      <select name="pos1" required>
        {dropDownMenu}
      </select>
      <textarea name="sentence2" placeholder="And then..." rows="4" cols="50" required/>
      <select name="pos2" required>
      {dropDownMenu}
      </select>
      <textarea name="sentence3" placeholder="What now?" rows="4" cols="50" required />
      <select name="pos3" required>
      {dropDownMenu}
      </select>
      <textarea name="sentence4" placeholder="Next..." rows="4" cols="50" required />
      <select name="pos4" required>
      {dropDownMenu}
      </select>
      <textarea name="sentence5" placeholder="Wrap it up!" rows="4" cols="50" required />
      <select name="pos5" required>
      {dropDownMenu}
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
