"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div className="faq-item" key={i}>
          <button
            className="faq-item__question"
            aria-expanded={openIndex === i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span>{item.question}</span>
            <svg className="faq-item__icon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="faq-item__answer">
              {typeof item.answer === "string" ? <p>{item.answer}</p> : item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
