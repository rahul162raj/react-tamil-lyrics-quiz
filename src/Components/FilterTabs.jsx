import React from "react";

export default function FilterTabs({ questions, goToSection }) {
  if (questions.length === 0) {
    return <h1>loading</h1>;
  } else {
    return (
      <div>
        <h1>all questions</h1>
        {questions.map((item, key) => (
          <div key={key}>
            <button onClick={() => goToSection(key + 1)}>
              {key + 1 + ")" + item.title}
            </button>
          </div>
        ))}
        <h1>unanswered questions</h1>
        <p>{questions.filter((item) => item.userAnswer === null).length}</p>
        {questions
          .filter((item) => item.userAnswer === null)
          .map((item, key) => (
            <div key={key}>
              <button onClick={() => goToSection(key + 1)}>
                {key + 1 + ")" + item.title}
              </button>
            </div>
          ))}
        <h1>answered questions</h1>
        <p>{questions.filter((item) => item.userAnswer !== null).length}</p>
        {questions
          .filter((item) => item.userAnswer !== null)
          .map((item, key) => (
            <div key={key}>
              <button onClick={() => goToSection(key + 1)}>
                {key + 1 + ")" + item.title}
              </button>
            </div>
          ))}
      </div>
    );
  }
}
