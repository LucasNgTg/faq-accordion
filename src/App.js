import React from 'react';
import Header from './components/Header';
import FaqItem from './components/FaqItem';
import './css/reset.css';
import './css/styles.css';
import './css/responsive.css'

const faqCouples = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
  },
  {
    question: "Is Frontend Mentor free?",
    answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
  },
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
  }
]

function App() {
  return (
      <div className='card'>
        <Header />
        <table>
          <tbody>
            <FaqItem question={faqCouples[0].question} answer={faqCouples[0].answer} />
            <FaqItem question={faqCouples[1].question} answer={faqCouples[1].answer} />
            <FaqItem question={faqCouples[2].question} answer={faqCouples[2].answer} />
            <FaqItem question={faqCouples[3].question} answer={faqCouples[3].answer} />
          </tbody>
        </table>
      </div>
  );
}

export default App;