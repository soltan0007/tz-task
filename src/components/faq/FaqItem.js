import React from 'react';
import "./faqItem.css"
const FaqItem = ({ item, index, isOpen, toggleItem }) => {
    return (
        <li className={`faq-item ${isOpen ? 'open' : ''}`}>
            <div className="faq-question" onClick={() => toggleItem(index)}>
                <span className="faq-question-text">{item.question}</span>
                <span className={`faq-icon ${isOpen ? 'open' : ''}`}>+</span>
            </div>
            {isOpen && (
                <div className="faq-answer">
                    <p>{item.answer}</p>
                </div>
            )}
        </li>
    );
};

export default FaqItem;
