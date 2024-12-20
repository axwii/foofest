"use client";
import { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    "How to become a sponsor of Foo Fest?",
    "Who plays at Foo Fest?",
    "Is the drinking water clean at Foo Fest?",
    "Do i have to book a camping spot?",
    "How many tickets is there for sale?",
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mt-36">
      <h1 className="text-5xl font-GermaniaOneRegular text-center mb-6 uppercase">
        Frequently asked questions
      </h1>
      <div className="p-6 max-w-lg mx-auto font-sans">
        {questions.map((question, index) => (
          <div key={index} className="border-b border-gray-300 py-4">
            <div
              onClick={() => toggleAccordion(index)}
              className={`text-2xl cursor-pointer transition-colors font-Gambetta ml-8 ${
                activeIndex === index
              }`}
            >
              ➤ {question}
            </div>
            {activeIndex === index && (
              <div className="my-8 ml-16 max-w-80">
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
