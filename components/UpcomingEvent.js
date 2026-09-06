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

export default function UpcomingEvents() 
{
  return (
    <section
      className="py-5"
      style={{
        background: "#f8f4ee",
      }}
    >
      <div className="container">

        {/* ================= HEADING ================= */}

        <div className="mb-5">
          <h2
            className="mb-2"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "40px",
              fontWeight: "700",
              color: "#111",
            }}
          >
            Upcoming{" "}
            <span style={{ color: "#ad3828" }}>
              Events
            </span>
          </h2>

          <p
            className="mb-0"
            style={{
              color: "#342a26",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            Take part in the next round of conversations
          </p>
        </div>

        {/* ================= EVENTS ================= */}

        <div
          style={{
            borderTop: "1px solid #e3dcd4",
          }}
        >
          {events.map((event, index) => (
            <div
              key={index}
              className="row align-items-center g-0 py-3"
              style={{
                minHeight: "99px",
                borderBottom: "1px solid #e3dcd4",
              }}
            >

              {/* DATE BOX */}

              <div className="col-auto">
                <div
                  className="d-flex flex-column justify-content-center align-items-center text-center"
                  style={{
                    width: "61px",
                    height: "61px",
                    background: "#ad3828",
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
                  className="mb-1"
                  style={{
                    color: "#302722",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  {event.title}
                </h3>

                <div
                  className="d-flex flex-column flex-sm-row gap-1 gap-sm-4"
                  style={{
                    color: "#776d67",
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
                  className="w-100"
                  style={{
                    minWidth: "70px",
                    height: "32px",
                    padding: "0 12px",
                    background: "transparent",
                    border: "1px solid #786f69",
                    borderRadius: "2px",
                    color: "#302722",
                    fontSize: "11px",
                    fontWeight: "600",
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
            className="btn"
            style={{
              minWidth: "130px",
              height: "40px",
              padding: "0 20px",
              background: "#ad3828",
              border: "1px solid #ad3828",
              borderRadius: "2px",
              color: "#fff",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            View All Events
          </button>
        </div>

      </div>
    </section>
  );
}