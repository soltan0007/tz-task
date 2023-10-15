import React, { useState } from 'react';
import FaqItem from './FaqItem';
import "./faq.css"

const Faq = ({ faqData }) => {
    const [openItemIndex, setOpenItemIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenItemIndex(openItemIndex === index ? null : index);
    };

    return (
        <div className="faq">
            <h2>Відповіді на часті запитання</h2>
            <ul>
                {faqData.map((item, index) => (
                    <FaqItem
                        key={index}
                        index={index}
                        item={item}
                        isOpen={index === openItemIndex}
                        toggleItem={toggleItem}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Faq;
