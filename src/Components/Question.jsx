import React from "react";

const Question = ({ question, updateUserAnswers }) => {
  if (question) {
    const options = question.options;
    return (
      <div>
        <h1>{question.title}</h1>
        {Object.keys(options).map((key, index) => (
          <div key={index}>
            <button
              onClick={() => {
                updateUserAnswers(question, key);
              }}
            >
              {options[key]}
            </button>
          </div>
        ))}
        <h1>{question.userAnswer}</h1>
        <h1>{question.userAnswer === question.answer ? "correct" : "wrong"}</h1>
      </div>
    );
  } else {
    return <h1>loading</h1>;
  }
};

export default Question;
