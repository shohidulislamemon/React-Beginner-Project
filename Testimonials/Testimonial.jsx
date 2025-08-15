import { useState } from "react";
import "./style.css";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote:
        "This platform completely transformed the way I learn programming. The explanations are clear and the examples are practical.",
      author: "Ayesha Rahman",
    },
    {
      quote:
        "I was struggling with C++ concepts, but now everything feels much easier. Highly recommend to every student!",
      author: "Mahmud Hasan",
    },
    {
      quote:
        "The structured answers and real-world examples made my exam preparation so much smoother.",
      author: "Tanvir Alam",
    },
    {
      quote:
        "One of the best resources I’ve ever used. Not just theory, but practical problem-solving approaches are covered.",
      author: "Farhana Akter",
    },
    {
      quote:
        "Clear, concise, and easy to understand. Exactly what I needed for my diploma studies.",
      author: "Sabbir Hossain",
    },
  ];

  const handlePrev = () =>
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  const handleNext = () =>
    setCurrentIndex(
      (currentIndex + testimonials.length + 1) % testimonials.length
    );

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        {testimonials[currentIndex].author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrev} className="testimonials-nav button">
          Prev
        </button>
        <button onClick={handleNext} className="testimonials-nav button">
          Next
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
