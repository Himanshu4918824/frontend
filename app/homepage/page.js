"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <section className="bg-white border-top py-5">
      <div className="container py-4 py-md-5">
        <div className="row align-items-center g-4 g-lg-5">
          {/* ================= LEFT CONTENT ================= */}
          <div className="col-12 col-lg-6">
            <h1
              className="fw-bold mb-4"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "clamp(26px, 3.6vw, 46px)",
                lineHeight: "1.25",
                color: "#1a1a1a",
              }}
            >
              {/* Line 1 */}
              <span className="d-block" style={{ whiteSpace: "nowrap" }}>
                Can Bihar once again
              </span>

              {/* Line 2 */}
              <span className="d-block" style={{ whiteSpace: "nowrap" }}>
                help strengthen <span style={{ color: "#a93627" }}>Indian</span>
              </span>

              {/* Line 3 */}
              <span className="d-block" style={{ color: "#a93627" }}>
                Democracy?
              </span>
            </h1>

            <p
              className="fw-semibold mb-4 mb-md-5"
              style={{
                fontSize: "clamp(15px, 1.5vw, 18px)",
                color: "#5a4b45",
              }}
            >
              Khoj Bihar se, Jawab Loktantra ke..
            </p>

            {/* ================= BUTTONS ================= */}
            <div className="d-flex flex-wrap gap-2 mb-4">
              <Link
                href="/inquiry"
                className="btn text-white px-4 py-3 rounded-1 fw-semibold"
                style={{
                  backgroundColor: "#a93627",
                  fontSize: "12px",
                  letterSpacing: "0.5px",
                }}
              >
                Explore the Inquiry
              </Link>

              <Link
                href="/contribute"
                className="btn btn-outline-dark px-4 py-3 rounded-1 fw-semibold"
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.5px",
                }}
              >
                Join the Initiative
              </Link>
            </div>

            {/* ================= STATS ================= */}
            <div
              className="border-top pt-3 mt-4"
              style={{ borderColor: "#eaded6" }}
            >
              <div className="row g-0">
                {/* STAT 1 */}
                <div className="col-4 pe-2">
                  <div
                    className="fw-bold fs-5"
                    style={{ color: "#1a1a1a" }}
                  >
                    38
                  </div>
                  <small style={{ fontSize: "12px", color: "#6b5d57" }}>
                    Districts Consulted
                  </small>
                </div>

                {/* STAT 2 */}
                <div className="col-4 px-3 border-start border-end">
                  <div
                    className="fw-bold fs-5"
                    style={{ color: "#1a1a1a" }}
                  >
                    12k+
                  </div>
                  <small style={{ fontSize: "12px", color: "#6b5d57" }}>
                    Citizen Voices
                  </small>
                </div>

                {/* STAT 3 */}
                <div className="col-4 ps-3">
                  <div
                    className="fw-bold fs-5"
                    style={{ color: "#1a1a1a" }}
                  >
                    6
                  </div>
                  <small style={{ fontSize: "12px", color: "#6b5d57" }}>
                    Partner Universities
                  </small>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="col-12 col-lg-6">
            <div
              className="position-relative rounded-2 overflow-hidden shadow-sm"
              style={{
                height: "min(60vw, 430px)",
                width: "100%",
              }}
            >
              <Image
                src="/images/homepic.png"
                alt="Bihar's Democratic Heritage"
                fill
                priority
                sizes="(max-width: 992px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />

              {/* Overlay */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"
                style={{ zIndex: 1 }}
              ></div>

              {/* Text Content */}
              <div
                className="position-absolute bottom-0 start-0 p-4 text-white"
                style={{ zIndex: 2 }}
              >
                <div
                  className="fw-bold mb-1"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "1.2px",
                  }}
                >
                  BIHAR'S DEMOCRATIC HERITAGE
                </div>

                <div
                  style={{
                    maxWidth: "280px",
                    fontSize: "13px",
                    lineHeight: "1.45",
                    color: "rgba(255, 255, 255, 0.9)",
                  }}
                >
                  From Vaishali to Nalanda, from Champaran to the Future India's
                  Democratic Renewal.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}