"use client";

import React from "react";

const events = [
  {
    day: "24",
    month: "AUG",
    title: "District Consultation: Gaya",
    location: "Town Hall, Gaya",
    time: "10:00 AM – 1:00 PM",
  },
  {
    day: "02",
    month: "SEP",
    title: "Campus Dialogue: Patna University",
    location: "Senate Hall, Patna University",
    time: "3:00 PM – 5:30 PM",
  },
  {
    day: "15",
    month: "SEP",
    title: "Public Lecture: Constitutionalism & Community",
    location: "Nalanda Open University",
    time: "5:00 PM – 6:30 PM",
  },
];

export default function UpcomingEvents() {
  return (
    <section
      className="py-5"
      style={{
        background: "#f8f4ee",
      }}
    >
      <div className="container py-2">
        {/* ================= HEADING ================= */}
        <div className="mb-4 mb-lg-5">
          <h2
            className="fw-bold mb-2"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(30px, 4vw, 44px)",
              lineHeight: "1.1",
              color: "#1a1a1a",
            }}
          >
            Upcoming <span style={{ color: "#a93627" }}>Events</span>
          </h2>

          <p
            className="fw-semibold mb-0"
            style={{
              fontSize: "clamp(15px, 1.5vw, 18px)",
              color: "#5a4b45",
            }}
          >
            Take part in the next round of conversations
          </p>
        </div>

        {/* ================= EVENTS ================= */}
        <div
          style={{
            borderTop: "1px solid #eaded6",
          }}
        >
          {events.map((event, index) => (
            <div
              key={index}
              className="row align-items-center g-0 py-3"
              style={{
                minHeight: "99px",
                borderBottom: "1px solid #eaded6",
              }}
            >
              {/* DATE BOX */}
              <div className="col-auto">
                <div
                  className="d-flex flex-column justify-content-center align-items-center text-center"
                  style={{
                    width: "61px",
                    height: "61px",
                    background: "#a93627",
                    color: "#fff",
                    borderRadius: "2px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      lineHeight: "1",
                    }}
                  >
                    {event.day}
                  </div>

                  <div
                    style={{
                      marginTop: "5px",
                      fontSize: "10px",
                      letterSpacing: "1px",
                    }}
                  >
                    {event.month}
                  </div>
                </div>
              </div>

              {/* EVENT INFORMATION */}
              <div className="col ps-3 ps-sm-4">
                <h3
                  className="mb-1 fw-bold"
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    color: "#1a1a1a",
                    fontSize: "16px",
                  }}
                >
                  {event.title}
                </h3>

                <div
                  className="d-flex flex-column flex-sm-row gap-1 gap-sm-4"
                  style={{
                    color: "#6b5d57",
                    fontSize: "12px",
                  }}
                >
                  <span>{event.location}</span>
                  <span>{event.time}</span>
                </div>
              </div>

              {/* REGISTER */}
              <div className="col-12 col-sm-auto mt-3 mt-sm-0 ms-sm-3">
                <button
                  className="w-100 fw-semibold"
                  style={{
                    minWidth: "70px",
                    height: "32px",
                    padding: "0 12px",
                    background: "transparent",
                    border: "1px solid #786f69",
                    borderRadius: "2px",
                    color: "#1a1a1a",
                    fontSize: "11px",
                    letterSpacing: "0.5px",
                  }}
                >
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ================= VIEW ALL ================= */}
        <div className="text-center mt-5">
          <button
            className="btn fw-semibold"
            style={{
              minWidth: "130px",
              height: "40px",
              padding: "0 20px",
              background: "#a93627",
              border: "1px solid #a93627",
              borderRadius: "2px",
              color: "#fff",
              fontSize: "12px",
              letterSpacing: "0.5px",
            }}
          >
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
}