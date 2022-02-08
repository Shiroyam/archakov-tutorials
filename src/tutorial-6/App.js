import React from "react";
import "./App.css";
import FeedbackInput from "./components/FeedbackInput";
import Comment from "./components/Сomment";

const App = () => {
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    setComments([...JSON.parse(localStorage.getItem("comments"))]);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  return (
    <>
      <Comment comments={comments} />
      <FeedbackInput setComments={setComments} comments={comments} />
    </>
  );
};

export default App;
