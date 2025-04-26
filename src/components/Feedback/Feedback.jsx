export default function Feedback({ feedback, positive }) {
  return (
    <ul>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
      <li>Positive: {positive} %</li>
    </ul>
  );
}
