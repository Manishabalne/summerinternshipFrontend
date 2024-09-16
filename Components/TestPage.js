import React, { useState } from 'react';
import './TestPage.css';

const TestPage = () => {
    const [questions, setQuestions] = useState([
        { id: 1, question: 'What is React?', options: ['Library', 'Framework', 'Language'], marks: 1 },
        { id: 2, question: 'What is JSX?', options: ['JavaScript', 'HTML', 'XML'], marks: 1 },
    ]);
    const [startHour, setStartHour] = useState('00');
    const [startMinute, setStartMinute] = useState('00');
    // Handle marks increment and decrement
    const handleMarksChange = (id, increment) => {
        setQuestions(questions.map(q => {
            if (q.id === id) {
                const newMarks = increment ? q.marks + 1 : Math.max(1, q.marks - 1);
                return { ...q, marks: newMarks };
            }
            return q;
        }));
    };

    return (
        <div className="test-container">
            <div className="test-details">
            <div className="test-time">
                    <label>
                        Start Time:
                        <div className="time-selection">
                            <select
                                value={startHour}
                                onChange={(e) => setStartHour(e.target.value)}
                            >
                                {[...Array(24).keys()].map(hour => (
                                    <option key={hour} value={hour.toString().padStart(2, '0')}>
                                        {hour.toString().padStart(2, '0')}
                                    </option>
                                ))}
                            </select>
                            <span>:</span>
                            <select
                                value={startMinute}
                                onChange={(e) => setStartMinute(e.target.value)}
                            >
                                {[...Array(60).keys()].map(minute => (
                                    <option key={minute} value={minute.toString().padStart(2, '0')}>
                                        {minute.toString().padStart(2, '0')}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </label>
                </div>
                <div className="test-duration">
                    <label>
                        Duration (mins): <input type="number" min="1" />
                    </label>
                </div>
            </div>

            <div className="questions-section">
                <h3>Selected Test Questions</h3>
                {questions.length > 0 ? (
                    <ol>
                        {questions.map((q) => (
                            <li key={q.id} className="question-item">
                                <div className="question-header">
                                    <strong>{q.question}</strong>
                                    <button className="modify-btn">Modify</button>
                                </div>
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
                                <div className="marks">
                    <label>
                        Marks: <input type="number" min="1" />
                    </label>
                </div>
                            </li>
                        ))}
                    </ol>
                ) : (
                    <p>No questions selected for the test.</p>
                )}
            </div>

            <button className="post-test-btn">Post Test</button>
        </div>
    );
};

export default TestPage;
