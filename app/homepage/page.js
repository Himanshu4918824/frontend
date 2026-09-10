"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() 
{
  return (
     <section className="bg-white border-top py-5">
      <div className="container py-4 py-md-5">

        <div className="row align-items-center g-5">

          {/* ================= LEFT CONTENT ================= */}

          <div className="col-12 col-lg-5">

            <h1 className="display-5 fw-bold lh-1 mb-4 text-dark">
              Can Bihar once again
              <br />
              help strengthen{" "}
              <span style={{ color: "#a93627" }}>
                Indian
              </span>
              <br />
              <span style={{ color: "#a93627" }}>
                Democracy?
              </span>
            </h1>

            <p className="fw-semibold text-secondary mb-5">
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
                }}
              >
                Explore the Inquiry
              </Link>

              <Link
                href="/contribute"
                className="btn btn-outline-dark px-4 py-3 rounded-1 fw-semibold"
                style={{
                  fontSize: "12px",
                }}
              >
                Join the Initiative
              </Link>

            </div>

            {/* ================= STATS ================= */}

            <div className="border-top pt-3 mt-4">

              <div className="row g-0">

                {/* STAT 1 */}

                <div className="col-4 pe-2">
                  <div className="fw-bold fs-5 text-dark">
                    38
                  </div>

                  <small className="text-secondary">
                    Districts Consulted
                  </small>
                </div>

                {/* STAT 2 */}

                <div className="col-4 px-3 border-start border-end">
                  <div className="fw-bold fs-5 text-dark">
                    12k+
                  </div>

                  <small className="text-secondary">
                    Citizen Voices
                  </small>
                </div>

                {/* STAT 3 */}

                <div className="col-4 ps-3">
                  <div className="fw-bold fs-5 text-dark">
                    6
                  </div>

                  <small className="text-secondary">
                    Partner Universities
                  </small>
                </div>

              </div>

            </div>

          </div>


          {/* ================= RIGHT IMAGE ================= */}

          <div className="col-12 col-lg-7">

            <div className="position-relative rounded-2 overflow-hidden shadow">

              <img
                src="/images/homepic.png"
                alt="Bihar's Democratic Heritage"
                className="w-100 d-block"
                style={{
                  height: "min(60vw, 430px)",
                  objectFit: "cover",
                }}
              />

              {/* Dark overlay */}

              <div
                className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"
              ></div>

              {/* ================= IMAGE TEXT ================= */}

              <div className="position-absolute bottom-0 start-0 p-4 text-white">

                <div
                  className="fw-bold mb-1"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "1px",
                  }}
                >
                  BIHAR'S DEMOCRATIC HERITAGE
                </div>

                <div
                  className="small"
                  style={{
                    maxWidth: "280px",
                    lineHeight: "1.4",
                  }}
                >
                  From Vaishali to Nalanda, from
                  Champaran to the Future India's
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