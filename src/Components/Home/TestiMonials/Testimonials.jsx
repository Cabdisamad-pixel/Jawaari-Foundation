import React from "react";
import testimonialsStyles from "./Testimonials.module.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Dilshod Karimov",
      school: "NUU",
      message:
        "This platform helped me prepare for the Presidential Scholarship. The community support was incredible!",
    },
    {
      name: "Malika Turdiyeva",
      school: "TSTU",
      message:
        "Found amazing volunteer opportunities and made lifelong connections through this platform.",
    },
  ];

  return (
    <section className={testimonialsStyles.testimonials}>
      <h2>Student Success Stories</h2>
      <p>Hear from students who achieved their dreams</p>
      <div className={testimonialsStyles.cards}>
        {testimonials.map((t, index) => (
          <div key={index} className={testimonialsStyles.card}>
            <div className={testimonialsStyles.stars}>★★★★★</div>
            <p>"{t.message}"</p>
            <h4>{t.name}</h4>
            <span>{t.school}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
