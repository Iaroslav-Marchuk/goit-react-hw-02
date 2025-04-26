import { useState, useEffect } from "react";
import "./App.css";

import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("savedFeedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const [isVisible, setIsVisible] = useState(false);

  let totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  let positive = Math.round((feedback.good / totalFeedback) * 100);

  useEffect(() => {
    const { good, neutral, bad } = feedback;
    const totalFeedback = good + neutral + bad;
    setIsVisible(totalFeedback > 0);
  }, [feedback]);

  useEffect(() => {
    localStorage.setItem("savedFeedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const handleReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div>
      <Description />
      <Options update={updateFeedback} isOpen={isVisible} reset={handleReset} />
      {isVisible ? (
        <Feedback
          feedback={feedback}
          isVisibleFeedback={isVisible}
          setFeedback={setFeedback}
          positive={positive}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
