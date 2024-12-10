"use client";
import { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    "Hvordan bliver jeg Frivillig?",
    "Hvem spiller på Foo Fest?",
    "Er der rent drikkevand på festivalen?",
    "Skal jeg booke campingplads?",
    "Hvor mange billetter er der til Foo Fest?",
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mt-52">
        <h1 className="text-5xl font-GermaniaOneRegular text-center mb-6 uppercase">Ofte stillede spørgsmål</h1>
    <div className="p-6 max-w-lg mx-auto font-sans">
      
      {questions.map((question, index) => (
        <div key={index} className="border-b border-gray-300 py-4">
          <div
            onClick={() => toggleAccordion(index)}
            className={`text-2xl cursor-pointer transition-colors font-Gambetta ${
              activeIndex === index
            }`}
          >
            ➤ {question}
          </div>
          {activeIndex === index && (
            <div className="my-8 text-gray-700">
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Accordion;
