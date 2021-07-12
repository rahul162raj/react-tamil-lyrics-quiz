import { questions } from "./../MockData/QuestionData";

export function getAllQuestions() {
  return questions;
}

export function getQuestion(index) {
  return questions[index];
}
