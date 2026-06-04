"use client";

import { useState, useEffect, useCallback } from "react";

const reviews = [
  {
    name: "Philip BOATENG",
    rating: 5,
    date: "a year ago",
    text: "5/5 Stars - Exceptional Experience at Glowhite Dental Clinic!\n\nI recently visited Glowhite Dental Clinic, and I must say, it was an outstanding experience from start to finish! The moment I walked in, I was warmly greeted by the friendly front desk staff, who made me feel welcome and at ease. The doctor's professionalism and bedside manner were truly impressive. They took the time to explain everything clearly, answered all my questions, and made sure I was comfortable throughout the entire process. Their patience and kindness put me at ease, making the experience virtually stress-free. Having visited numerous dental facilities in the past, I can confidently say that Glowhite Dental Clinic stands out from the rest. The combination of a serene atmosphere, cutting-edge equipment, and exceptional staff made my visit truly unforgettable.",
    avatar: "P",
  },
  {
    name: "Hannah Dede Amponsah",
    rating: 5,
    date: "8 months ago",
    text: "I've been to Glowhite a couple of times and the patience they had with me was unthinkable. One thing I also admire is how customer centered they are. They actually check up on you to monitor your healing!",
    avatar: "HD",
  },
  {
    name: "Dorcas Anaba",
    rating: 5,
    date: "7 months ago",
    text: "The best dental visit I've ever had! The team was so friendly and professional. Highly recommend!",
    avatar: "DA",
  },
  {
    name: "Nana K Yaw",
    rating: 5,
    date: "a year ago",
    text: "Glowhite dental clinic they are very very good i went there for treatment and it was perfect thank you very much for my treatment",
    avatar: "N",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  return (
    <section className="py-24 px-8 md:px-20 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[12px] uppercase font-bold tracking-widest text-primary mb-2 block font-body">
              Patient Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface font-headline">
              What Our Patients Say
            </h2>
          </div>
          {/* Google badge */}
          <a
            href="https://www.google.com/search?q=glowhite+dental+clinic#lrd=0xfdf9dfee016a61f:0xb8000dfd869664db,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors font-body"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="font-semibold">Google Reviews</span>
            <span className="material-symbols-outlined text-base">open_in_new</span>
          </a>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Cards wrapper */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {reviews.map((review, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-2">
                  <div className="bg-surface-container-lowest rounded-2xl p-8 md:p-10 shadow-sm border border-outline-variant/10 max-w-3xl mx-auto">
                    {/* Quote icon */}
                    <svg
                      className="w-10 h-10 text-primary/20 mb-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>

                    <p className="text-on-surface text-lg leading-relaxed font-body mb-8">
                      &ldquo;{review.text}&rdquo;
                    </p>

                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm font-headline flex-shrink-0">
                          {review.avatar}
                        </div>
                        <div>
                          <p className="font-bold text-on-surface font-headline">{review.name}</p>
                          <p className="text-xs text-on-surface-variant font-body">{review.date}</p>
                        </div>
                      </div>
                      <StarRating rating={review.rating} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            aria-label="Previous review"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 rounded-full bg-surface-container-lowest shadow-md border border-outline-variant/20 flex items-center justify-center hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-on-surface">chevron_left</span>
          </button>
          <button
            onClick={next}
            aria-label="Next review"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 rounded-full bg-surface-container-lowest shadow-md border border-outline-variant/20 flex items-center justify-center hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-on-surface">chevron_right</span>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to review ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === current
                  ? "w-8 bg-primary"
                  : "w-2 bg-outline-variant hover:bg-outline"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
