import React, { useState } from 'react';
import './QuestionsPage.css';

const QuestionsPage = () => {
    const [questions, setQuestions] = useState([
        { id: 1, question: 'What is React?', options: ['Library', 'Framework', 'Language'] },
        { id: 2, question: 'What is JSX?', options: ['JavaScript', 'HTML', 'XML'] },
    ]);

    return (
        <div className="container">
            <div className="top-panel">
                <div className="left-panel">
                    <div className="buttons">
                        <button className="btn">Admin Questions</button>
                        <button className="btn">My Questions</button>
                    </div>
                </div>
                <div className="right-panel">
                    <button className="btn">Create Question</button>
                </div>
            </div>

            <div className="body">
                <h3>Selected Test Questions</h3>
                {questions.length > 0 ? (
                    <ol>
                    {questions.map((q) => (
                        <li key={q.id} className="question-item">
                            <strong>{q.question}</strong>
                            <div className="options">
                                {q.options.map((option, index) => (
                                    <div key={index} className="option-item">
                                        <label>
                                            <input 
                                                type="radio" 
                                                name={`question-${q.id}`} 
                                                value={option} 
                                            />
                                            {option}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </li>
                    ))}
                </ol>
                ) : (
                    <p>No questions selected for the test.</p>
                )}
            </div>
            <div >
                    <button className="btn">Next</button>
            </div>
        </div>
    );
};

export default QuestionsPage;
