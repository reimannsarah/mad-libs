import React from "react";

function NewQuizForm(props) {
  function handleNewQuizSubmission(event) {
    event.preventDefault();
    props.onNewQuizCreation({
      sentence1: event.target.sentence1.value,
      pos1: event.target.pos1.value,
      sentence2: event.target.sentence2.value,
      pos2: event.target.pos2.value,
      sentence3: event.target.sentence3.value,
      pos3: event.target.pos3.value,
      sentence4: event.target.sentence4.value,
      pos4: event.target.pos4.value,
      sentence5: event.target.sentence5.value,
      pos5: event.target.pos5.value
    })
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewQuizSubmission}>
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
        <button type="submit">Submit my MadLib!</button>
      </form>
    </React.Fragment>
  );
}

export default NewQuizForm;