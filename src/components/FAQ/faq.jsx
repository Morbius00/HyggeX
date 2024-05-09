/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Down } from "./assets/index";

const FaqDropdown = () => {
  // State to manage the visibility of each FAQ answer
  const [faqVisibility, setFaqVisibility] = useState({});

  // Function to toggle visibility of a FAQ answer
  const toggleFaqVisibility = (index) => {
    setFaqVisibility((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // FAQ data containing questions and answers
  const faqData = [
    {
      question: "Can education flashcards be used for all age groups?",
      answer:
        "Yes, education flashcards can be utilized across all age groups. Tailored content can suit diverse learning levels, from basic vocabulary for early childhood to complex concepts for adults. They facilitate interactive learning, aiding in memorization and comprehension across various subjects and stages of education. Whether for preschoolers learning letters or adults studying specialized fields, flashcards offer a versatile tool for reinforcing knowledge and skills.",
    },
    {
      question: "How do education flashcards work?",
      answer:
        "Education flashcards work by presenting information in a concise and visually engaging format. Users typically write or print key facts, concepts, or questions on one side of the card and corresponding answers or explanations on the other. Through repetition and active recall, learners reinforce memory retention and comprehension. Flashcards can be used individually or in groups, allowing for self-paced learning or interactive study sessions. Their portability and versatility make them effective tools for reviewing and mastering a wide range of subjects and topics.",
    },
    {
      question: "Can education flashcards be used for test preparation?",
      answer:
        "Yes, education flashcards are commonly used for test preparation across various academic levels. They provide a portable and efficient way to review key concepts, facts, vocabulary, and formulas. Flashcards facilitate active recall and repetition, which are effective strategies for reinforcing memory retention. Whether preparing for standardized tests, final exams, or quizzes, flashcards help learners systematically review and internalize information. Additionally, they can be personalized to focus on specific areas of weakness or to target the content areas most relevant to the exam.",
    },
  ];

  return (
    <div>
      <div className="text-6xl font-bold bg-gradient-to-b from-[#06286E] to-blue-500 text-transparent bg-clip-text my-24">
        FAQ
      </div>

      {/* Render FAQ items */}
      {faqData.map((item, index) => (
        <div
          className="lg:w-[848px] h-[58]  border-[#06286E] border-2 m-6 p-5 rounded-xl"
          key={index}
        >
          {/* FAQ Question */}
          <div
            style={{ cursor: "pointer" }}
            onClick={() => toggleFaqVisibility(index)}
            className="flex items-center justify-between text-xl font-semibold text-black"
          >
            <h3>{item.question}</h3>
            <div>
              <img src={Down} alt="" />
            </div>
          </div>
          {/* FAQ Answer (conditionally rendered based on visibility state) */}
          <div className="my-4">
            {faqVisibility[index] && <p>{item.answer}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqDropdown;
