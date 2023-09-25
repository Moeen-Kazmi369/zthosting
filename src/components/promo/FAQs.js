'use client'
import React, { useState } from 'react';

const FAQs = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  const questions = [
    'What is web hosting?',
    'What is shared hosting?',
    'What is the difference between web hosting & shared hosting?',
    'Do I need web hosting?',
    'Is shared hosting right for me?',
    'What web hosting package should I buy?',
    'Is shared hosting reliable?',
  ];

  const answers = [
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  ];

  return (
    <section className="accordian-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="accordian_content">
              <h2>Frequently Asked Questions</h2>
              <p>
                Do you have any Web Hosting questions? We have your answers!
                Below you'll find answers to the most commonly asked Web Hosting questions.
              </p>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-right">
          <div className="col-lg-1 col-md-1 col-sm-1 d-lg-block d-none"></div>
          <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12">
            <div className="accordian-section-inner position-relative">
              <div className="accordian-inner">
                <div id="accordion1">
                  {questions.map((question, index) => (
                    <div className="accordion-card" key={index}>
                      <div
                        className="card-header"
                        id={`heading${index}`}
                        onClick={() => handleQuestionClick(index)}
                      >
                        <a
                          href="#"
                          className={`btn btn-link ${activeQuestion === index ? '' : 'collapsed'}`}
                          data-toggle="collapse"
                          data-target={`#collapse${index}`}
                          aria-expanded={activeQuestion === index}
                          aria-controls={`collapse${index}`}
                        >
                          <h6>{question}</h6>
                        </a>
                      </div>
                      <div
                        id={`collapse${index}`}
                        className={`collapse ${activeQuestion === index ?"visible show" : ''}`}
                        aria-labelledby={`heading${index}`}
                      >
                        <div className="card-body">
                          <p className="pp text-left mb-0 p-0">{answers[index]}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1 d-lg-block d-none"></div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
