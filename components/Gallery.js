"use client";

import { useState, useEffect } from "react";

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Track viewport width for responsive calculations
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    {
      title: "CONSULTATION",
      heading: "Vaishali District Consultation, March 2026",
      image: "/images/aboutpic.png",
    },
    {
      title: "EVENT",
      heading: "Social Awareness Campaign",
      image: "/images/homepic.png",
    },
    {
      title: "WORKSHOP",
      heading: "Community Development Workshop",
      image: "/images/tree.png",
    },
    {
      title: "AWARENESS",
      heading: "Building Better Communities Together",
      image: "/images/homepic.png",
    },
    {
      title: "PROGRAM",
      heading: "Youth Empowerment Program",
      image: "/images/tree.png",
    },
    {
      title: "CAMPAIGN",
      heading: "Making A Positive Difference",
      image: "/images/aboutpic.png",
    },
  ];

  // NEXT
  const nextSlide = () => {
    setActive((prev) => (prev + 1) % data.length);
  };

  // PREVIOUS
  const prevSlide = () => {
    setActive((prev) => (prev - 1 + data.length) % data.length);
  };

  // CARD POSITION
  const getPosition = (index) => {
    let position = index - active;

    if (position < -3) {
      position += data.length;
    }

    if (position > 3) {
      position -= data.length;
    }

    return position;
  };

  return (
    <section
      className="container-fluid p-0"
      style={{
        height: isMobile ? "650px" : "800px",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      {/* ================= HEADING ================= */}
      <div
        className="container pt-4 pt-sm-5 px-3"
        style={{
          position: "relative",
          zIndex: 10,
        }}
      >
        <h2
          className="mb-2"
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: isMobile ? "28px" : "40px",
            fontWeight: "700",
            color: "#ad3828",
            lineHeight: "1.1",
          }}
        >
          Highlights
        </h2>

        <p
          className="mb-0"
          style={{
            color: "#342a26",
            fontSize: isMobile ? "15px" : "18px",
            fontWeight: "600",
          }}
        >
          From the district, campuses and halls
        </p>
      </div>

      {/* ================= CAROUSEL ================= */}
      <div
        className="position-relative w-100"
        style={{
          height: isMobile ? "480px" : "600px",
          marginTop: isMobile ? "10px" : "20px",
          overflow: "hidden",
        }}
      >
        {/* ================= CARDS ================= */}
        {data.map((item, index) => {
          const position = getPosition(index);

          let left = "50%";
          let width = isMobile ? "180px" : "220px";
          let height = isMobile ? "280px" : "360px";
          let transform = "translate(-50%, -50%) scale(.8)";
          let opacity = 0;
          let zIndex = 1;

          /* ================= CENTER CARD ================= */
          if (position === 0) {
            left = "50%";
            width = isMobile ? "82vw" : "360px";
            height = isMobile ? "380px" : "460px";
            transform = "translate(-50%, -50%) scale(1)";
            opacity = 1;
            zIndex = 5;
          }

          /* ================= LEFT CARD ================= */
          if (position === -1) {
            left = isMobile ? "12%" : "27%";
            width = isMobile ? "180px" : "270px";
            height = isMobile ? "300px" : "400px";
            transform = "translate(-50%, -50%) scale(.85)";
            opacity = isMobile ? 0.3 : 1;
            zIndex = 3;
          }

          /* ================= RIGHT CARD ================= */
          if (position === 1) {
            left = isMobile ? "88%" : "73%";
            width = isMobile ? "180px" : "270px";
            height = isMobile ? "300px" : "400px";
            transform = "translate(-50%, -50%) scale(.85)";
            opacity = isMobile ? 0.3 : 1;
            zIndex = 3;
          }

          /* ================= FAR LEFT ================= */
          if (position === -2) {
            left = isMobile ? "-20%" : "7%";
            width = isMobile ? "150px" : "220px";
            height = isMobile ? "260px" : "360px";
            transform = "translate(-50%, -50%) scale(.8)";
            opacity = isMobile ? 0 : 0.45;
            zIndex = 1;
          }

          /* ================= FAR RIGHT ================= */
          if (position === 2) {
            left = isMobile ? "120%" : "93%";
            width = isMobile ? "150px" : "220px";
            height = isMobile ? "260px" : "360px";
            transform = "translate(-50%, -50%) scale(.8)";
            opacity = isMobile ? 0 : 0.45;
            zIndex = 1;
          }

          return (
            <div
              key={index}
              className="position-absolute rounded-3 overflow-hidden"
              style={{
                left: left,
                top: "48%",
                width: width,
                height: height,
                maxWidth: "92vw",
                transform: transform,
                opacity: opacity,
                zIndex: zIndex,
                transition: "all .65s cubic-bezier(.4,0,.2,1)",
                boxShadow:
                  position === 0
                    ? "0 20px 50px rgba(0,0,0,.22)"
                    : "0 12px 30px rgba(0,0,0,.12)",
              }}
            >
              {/* ================= IMAGE ================= */}
              <img
                src={item.image}
                alt={item.heading}
                className="w-100 h-100"
                style={{
                  objectFit: "cover",
                }}
              />

              {/* ================= GRADIENT ================= */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 20%, rgba(0,0,0,.88) 100%)",
                }}
              />

              {/* ================= CONTENT ================= */}
              <div
                className="position-absolute bottom-0 start-0 w-100 p-3"
                style={{
                  color: "#fff",
                  boxSizing: "border-box",
                }}
              >
                {/* TAG */}
                <span
                  className="badge mb-2 d-inline-block"
                  style={{
                    background: "#b83d28",
                    letterSpacing: "1px",
                    fontSize: isMobile ? "8px" : "9px",
                    padding: "5px 8px",
                  }}
                >
                  {item.title}
                </span>

                {/* TITLE */}
                <h5
                  className="fw-bold mb-0 text-break"
                  style={{
                    fontSize:
                      position === 0
                        ? isMobile
                          ? "16px"
                          : "19px"
                        : "13px",
                    lineHeight: "1.3",
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                  }}
                >
                  {item.heading}
                </h5>
              </div>
            </div>
          );
        })}

        {/* ================= LEFT ARROW ================= */}
        <button
          onClick={prevSlide}
          className="btn rounded-circle position-absolute top-50 start-0 translate-middle-y ms-2 ms-sm-3 d-flex align-items-center justify-content-center"
          style={{
            width: isMobile ? "36px" : "44px",
            height: isMobile ? "36px" : "44px",
            zIndex: 20,
            background: "#fff",
            border: "1px solid #eadbd5",
            boxShadow: "0 5px 15px rgba(0,0,0,.10)",
            fontSize: isMobile ? "16px" : "20px",
            color: "#333",
          }}
        >
          ‹
        </button>

        {/* ================= RIGHT ARROW ================= */}
        <button
          onClick={nextSlide}
          className="btn rounded-circle position-absolute top-50 end-0 translate-middle-y me-2 me-sm-3 d-flex align-items-center justify-content-center"
          style={{
            width: isMobile ? "36px" : "44px",
            height: isMobile ? "36px" : "44px",
            zIndex: 20,
            background: "#fff",
            border: "1px solid #eadbd5",
            boxShadow: "0 5px 15px rgba(0,0,0,.10)",
            fontSize: isMobile ? "16px" : "20px",
            color: "#333",
          }}
        >
          ›
        </button>

        {/* ================= DOTS ================= */}
        <div
          className="position-absolute bottom-0 start-50 translate-middle-x d-flex align-items-center gap-2 pb-3"
          style={{
            zIndex: 20,
          }}
        >
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className="border-0 rounded-pill"
              style={{
                width: active === index ? (isMobile ? "20px" : "25px") : "8px",
                height: "8px",
                padding: 0,
                background: active === index ? "#b83d28" : "#ccc",
                transition: ".3s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}