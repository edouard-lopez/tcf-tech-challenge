import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "./config";
import { get } from "./Fetchers";
import { Question } from "./types/types";

const Questions = ({ match }: any) => {
  const [question, setQuestion] = useState<Question>({ id: 0, title: "" });
  const [questionId, setQuestionId] = useState<Question>(match.params.id);

  const getQuestions = async () => {
    const question = await get<Question>(
      `${config.apiUrl}/questions/${questionId}`
    );
    setQuestion(question);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div>
      <h2>
        <nav>
          <ul>
            <li><Link to="/categories">←</Link></li>
            <li>{question.title}</li>
            <li>💾 Save</li>
          </ul>
        </nav>
      </h2>
      <div>
        <p contentEditable>todo</p>
        <button>x</button>
      </div>
      <div>
        <label>
          <input type="radio" />
          Ask satisfaction
        </label>
      </div>
      <div>
        <h3>Add Element</h3>
        <ul>
          <li><button>Text</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Questions;
