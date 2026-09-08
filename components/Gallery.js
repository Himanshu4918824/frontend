"use client";

import { useState } from "react";

const highlights = [
  {
    image: "/images/aboutpic.png",
    category: "CONSULTATION",
    title: "Vaishali District Consultation, March 2026",
  },
  {
    image: "/images/homepic.png",
    category: "CAMPUS DIALOGUE",
    title: "Patna University Campus Dialogue",
  },
  {
    image: "/images/tree.png",
    category: "PUBLIC LECTURE",
    title: "Constitutionalism & Community",
  },
  {
    image: "/images/aboutpic.png",
    category: "DISTRICT CONSULTATION",
    title: "Gaya District Consultation",
  },
  {
    image: "/images/homepic.png",
    category: "EXPERT DIALOGUE",
    title: "Expert Conversations",
  },
];

export default function Highlights() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % highlights.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + highlights.length) % highlights.length
    );
  };

  const getCard = (offset) => {
    return highlights[
      (current + offset + highlights.length) % highlights.length
    ];
  };

  return (
    <section className="py-5 bg-white">
      <div className="container-fluid px-3 px-md-4 px-lg-5">

        {/* ================= HEADER ================= */}

        <div className="mb-4 mb-md-5 px-0 px-lg-5">
          <h2
            className="fw-bold mb-2"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: "1.1",
              color: "#a63828",
            }}
          >
            Highlights
          </h2>

          <p
            className="fw-semibold mb-0"
            style={{
              fontSize: "clamp(16px, 1.5vw, 20px)",
              color: "#382c27",
            }}
          >
            From the districts, campuses and halls
          </p>
        </div>

        {/* ================= CAROUSEL ================= */}

        <div className="position-relative w-100">

          {/* ================= LEFT ARROW ================= */}

          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous highlight"
            className="
              position-absolute
              top-50
              translate-middle-y
              rounded-circle
              bg-white
              border
              shadow-sm
              d-flex
              align-items-center
              justify-content-center
              p-0
            "
            style={{
              left: "1%",
              width: "42px",
              height: "42px",
              zIndex: 10,
              color: "#4b3b34",
              borderColor: "#e8ddd5",
            }}
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          {/* =================================================
                         DESKTOP — 3 CARDS
              ================================================= */}

          <div
            className="row align-items-center justify-content-center g-3 g-lg-4 mx-auto d-none d-md-flex"
            style={{
              maxWidth: "1250px",
            }}
          >

            {/* LEFT CARD */}

            <div className="col-md-4">
              <HighlightCard
                item={getCard(-1)}
                active={false}
              />
            </div>

            {/* CENTER CARD */}

            <div className="col-md-4">
              <HighlightCard
                item={getCard(0)}
                active={true}
              />
            </div>

            {/* RIGHT CARD */}

            <div className="col-md-4">
              <HighlightCard
                item={getCard(1)}
                active={false}
              />
            </div>

          </div>

          {/* =================================================
                         MOBILE — ONLY 1 CARD
              ================================================= */}

          <div className="d-md-none px-2">

            <HighlightCard
              item={getCard(0)}
              active={true}
            />

          </div>

          {/* ================= RIGHT ARROW ================= */}

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next highlight"
            className="
              position-absolute
              top-50
              translate-middle-y
              rounded-circle
              bg-white
              border
              shadow-sm
              d-flex
              align-items-center
              justify-content-center
              p-0
            "
            style={{
              right: "1%",
              width: "42px",
              height: "42px",
              zIndex: 10,
              color: "#4b3b34",
              borderColor: "#e8ddd5",
            }}
          >
            <i className="bi bi-chevron-right"></i>
          </button>

        </div>

      </div>
    </section>
  );
}


/* =========================================================
                         CARD
========================================================= */

function HighlightCard({ item, active }) {
  return (
    <div
      className="position-relative overflow-hidden rounded-2 w-100"
      style={{
        height: "clamp(300px, 32vw, 370px)",
        transform: active ? "scale(1)" : "scale(0.92)",
        transition: "transform 0.3s ease",
        boxShadow: active
          ? "0 12px 30px rgba(45, 25, 15, 0.12)"
          : "none",
      }}
    >

      {/* ================= IMAGE ================= */}

      <img
        src={item.image}
        alt={item.title}
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          objectFit: "cover",
        }}
      />

      {/* ================= OVERLAY ================= */}

      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(to bottom, rgba(30,15,10,0.02) 25%, rgba(30,15,10,0.88) 100%)",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div
        className="
          position-absolute
          bottom-0
          start-0
          w-100
          p-3
          p-md-4
          text-white
        "
      >

        {/* CATEGORY */}

        <span
          className="d-inline-block px-2 py-1 fw-bold mb-2"
          style={{
            backgroundColor: "#a93627",
            fontSize: "8px",
            letterSpacing: "1px",
          }}
        >
          {item.category}
        </span>

        {/* TITLE */}

        <h5
          className="mb-0 fw-semibold"
          style={{
            fontSize: active ? "16px" : "13px",
            lineHeight: "1.35",
            maxWidth: "320px",
          }}
        >
          {item.title}
        </h5>

      </div>

    </div>
  );
}