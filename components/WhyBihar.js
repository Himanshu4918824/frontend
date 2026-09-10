"use client";

const data = [
  {
    text: "The optimism done by a poor being or a poor household gives evidence of their acumen and the power of optimism",
    position: "top",
  },
  {
    text: "Bihar has never merely reacted to history. It has repeatedly helped shape it. The republican traditions of Vaishali demonstrated collective self-government centuries before many modern democracies.",
    position: "bottom",
  },
  {
    text: "Bihar has never merely reacted to history. It has repeatedly helped shape it. The republican traditions of Vaishali demonstrated collective self-government centuries before many modern democracies.",
    position: "top",
  },
  {
    text: "Bihar has never merely reacted to history. It has repeatedly helped shape it. The republican traditions of Vaishali demonstrated collective self-government centuries before many modern democracies.",
    position: "bottom",
  },
];

const programs = [
  {
    icon: "bi-chat-square",
    title: "Expert Dialogues",
    description:
      "Structured discussions with scholars, historians and practitioners.",
  },
  {
    icon: "bi-clock",
    title: "Youth & Campus Engagement",
    description:
      "Workshops and debates building engaged young citizens.",
  },
  {
    icon: "bi-file-earmark-text",
    title: "Research & Documentation",
    description:
      "Independent research and a public archive of findings.",
  },
  {
    icon: "bi-calendar3",
    title: "Public Events",
    description:
      "Town halls and gatherings open to anyone who wants to take part.",
  },
  {
    icon: "bi-check-circle",
    title: "National Findings",
    description:
      "A published report synthesising what was heard, for all.",
  },
];

export default function WhyBihar() 
{
  return (
    <div>

      {/* =====================================================
                         WHY BIHAR
      ====================================================== */}

      <section className="bg-white py-5 overflow-hidden">

        <div className="container">

          {/* ================= HEADER ================= */}

          <div className="mb-4 mb-lg-5">

            <h2  className="fw-bold mb-2 text-dark" style={{fontFamily: 'Georgia, "Times New Roman", serif', fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.1"}}>
              Why{" "}
              <span style={{ color: "#a63828" }}>
                Bihar?
              </span>
            </h2>

            <p className="mb-0 fw-semibold" style={{fontSize: "clamp(15px, 1.5vw, 18px)", color: "#5a4b45",}}>
              From Vaishali&apos;s councils to Nalanda&apos;s courtyards, Bihar
            </p>

          </div>


          {/* =====================================================
                         DESKTOP TIMELINE
          ====================================================== */}

          <div className="d-none d-md-block position-relative mx-auto" style={{ maxWidth: "1180px", height: "520px", marginTop: "20px"}}>

            {/* HORIZONTAL LINE */}

            <div className="position-absolute start-0 end-0" style={{top: "250px", height: "2px", backgroundColor: "#eaded6" }}/>

            <div className="row g-0 h-100">

              {data.map((item, index) => (

                <div className="col-3 position-relative d-flex flex-column align-items-center" key={index}>

                  {/* ================= TOP CARD ================= */}

                  {item.position === "top" && (
                    <>
                      <div
                        className="bg-white border rounded-2 p-4 position-absolute shadow-sm"
                        style={{
                          width: "220px",
                          height: "225px",
                          top: "0",
                          borderColor: "#eaded6",
                        }}
                      >
                        <div className="d-flex align-items-end h-100">

                          <p
                            className="mb-0"
                            style={{
                              fontSize: "12px",
                              lineHeight: "1.55",
                              color: "#443934",
                            }}
                          >
                            {item.text}
                          </p>

                        </div>
                      </div>


                      {/* CONNECTOR */}

                      <div
                        className="position-absolute border-start"
                        style={{
                          top: "225px",
                          height: "25px",
                          borderColor: "#eaded6",
                        }}
                      />


                      {/* DOT */}

                      <TimelineDot />

                    </>
                  )}


                  {/* ================= BOTTOM CARD ================= */}

                  {item.position === "bottom" && (
                    <>

                      {/* DOT */}

                      <TimelineDot />


                      {/* CONNECTOR */}

                      <div
                        className="position-absolute border-start"
                        style={{
                          top: "257px",
                          height: "30px",
                          borderColor: "#eaded6",
                        }}
                      />


                      {/* CARD */}

                      <div
                        className="bg-white border rounded-2 p-4 position-absolute shadow-sm"
                        style={{
                          width: "220px",
                          height: "205px",
                          top: "287px",
                          borderColor: "#eaded6",
                        }}
                      >

                        <div className="d-flex align-items-center h-100">

                          <p
                            className="mb-0"
                            style={{
                              fontSize: "12px",
                              lineHeight: "1.55",
                              color: "#443934",
                            }}
                          >
                            {item.text}
                          </p>

                        </div>

                      </div>

                    </>
                  )}

                </div>

              ))}

            </div>

          </div>


          {/* =====================================================
                         MOBILE TIMELINE
          ====================================================== */}

          <div className="d-md-none mt-4">

            <div className="position-relative">

              {/* VERTICAL LINE */}

              <div
                className="position-absolute top-0 bottom-0"
                style={{
                  left: "7px",
                  width: "2px",
                  backgroundColor: "#eaded6",
                }}
              />


              {data.map((item, index) => (

                <div
                  className="d-flex position-relative mb-4"
                  key={index}
                >

                  {/* DOT */}

                  <TimelineDot mobile />


                  {/* CARD */}

                  <div
                    className="border rounded-2 bg-white ms-3 p-3 flex-grow-1 shadow-sm"
                    style={{
                      borderColor: "#eaded6",
                    }}
                  >

                    <p
                      className="mb-0"
                      style={{
                        fontSize: "13px",
                        lineHeight: "1.55",
                        color: "#443934",
                      }}
                    >
                      {item.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
                       WHAT WE ARE DOING
      ====================================================== */}

      <section
        className="py-5"
        style={{
          backgroundColor: "#faf6f0",
        }}
      >

        <div className="container">

          {/* ================= HEADER ================= */}

          <div className="mb-4 mb-lg-5">

            <h2
              className="fw-bold mb-2 text-dark"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "clamp(30px, 4vw, 44px)",
                lineHeight: "1.1",
              }}
            >
              What We Are{" "}
              <span style={{ color: "#a63828" }}>
                Doing
              </span>
            </h2>

            <p
              className="fw-semibold mb-0"
              style={{
                fontSize: "clamp(15px, 1.5vw, 18px)",
                color: "#493b35",
              }}
            >
              Six ways the inquiry is being carried out
            </p>

          </div>


          {/* =====================================================
                            PROGRAM GRID
          ====================================================== */}

          <div className="row g-3 g-lg-4">

            {/* ================= FEATURE CARD ================= */}

            <div className="col-12 col-lg-8">

              <div
                className="rounded-2 h-100 p-4 p-md-5 text-white d-flex flex-column justify-content-between"
                style={{
                  backgroundColor: "#aa3d2d",
                  minHeight: "300px",
                }}
              >

                <div>

                  <div
                    className="mb-4"
                    style={{
                      fontSize: "28px",
                    }}
                  >
                    <i className="bi bi-geo-alt"></i>
                  </div>

                  <h3
                    className="fw-semibold mb-3"
                    style={{
                      fontFamily:
                        'Georgia, "Times New Roman", serif',
                      fontSize: "clamp(22px, 2.5vw, 30px)",
                    }}
                  >
                    District Consultations
                  </h3>

                  <p
                    className="mb-0"
                    style={{
                      maxWidth: "520px",
                      fontSize: "14px",
                      lineHeight: "1.6",
                      color: "rgba(255,255,255,0.82)",
                    }}
                  >
                    Open conversations across all of Bihar&apos;s districts,
                    gathering firsthand experiences of democracy from
                    panchayats to city wards.
                  </p>

                </div>


                {/* ================= STATS ================= */}

                <div className="d-flex flex-wrap gap-4 gap-md-5 mt-5">

                  <div>
                    <div className="fw-bold fs-3">
                      38
                    </div>

                    <div
                      className="small"
                      style={{
                        color: "rgba(255,255,255,0.75)",
                      }}
                    >
                      Districts
                    </div>
                  </div>


                  <div>
                    <div className="fw-bold fs-3">
                      120+
                    </div>

                    <div
                      className="small"
                      style={{
                        color: "rgba(255,255,255,0.75)",
                      }}
                    >
                      Sessions Held
                    </div>
                  </div>

                </div>

              </div>

            </div>


            {/* ================= RIGHT CARDS ================= */}

            <div className="col-12 col-lg-4">

              <div className="row g-3">

                {programs.slice(0, 2).map((item, index) => (

                  <div
                    className="col-12"
                    key={index}
                  >

                    <ProgramCard item={item} />

                  </div>

                ))}

              </div>

            </div>


            {/* ================= BOTTOM CARDS ================= */}

            {programs.slice(2).map((item, index) => (

              <div
                className="col-12 col-md-6 col-lg-4"
                key={index}
              >

                <ProgramCard item={item} />

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}


/* =========================================================
                         TIMELINE DOT
========================================================= */

function TimelineDot({ mobile = false }) {
  return (
    <div
      className="position-absolute rounded-circle bg-white d-flex align-items-center justify-content-center"
      style={{
        top: mobile ? "0" : "244px",
        left: mobile ? "0" : "50%",
        transform: mobile ? "none" : "translateX(-50%)",
        width: mobile ? "16px" : "15px",
        height: mobile ? "16px" : "15px",
        border: "1px solid #eaded6",
        zIndex: 3,
      }}
    >
      <div
        className="rounded-circle"
        style={{
          width: "5px",
          height: "5px",
          backgroundColor: "#b43b29",
        }}
      />
    </div>
  );
}


/* =========================================================
                         PROGRAM CARD
========================================================= */

function ProgramCard({ item }) {
  return (
    <div
      className="bg-white border rounded-2 p-4 h-100 shadow-sm"
      style={{
        minHeight: "145px",
        borderColor: "#eaded6",
      }}
    >

      {/* ICON */}

      <i
        className={`bi ${item.icon}`}
        style={{
          color: "#b43829",
          fontSize: "21px",
        }}
      ></i>


      {/* TITLE */}

      <h6
        className="fw-bold mt-4 mb-2"
        style={{
          fontFamily:
            'Georgia, "Times New Roman", serif',
          fontSize: "15px",
          color: "#302621",
        }}
      >
        {item.title}
      </h6>


      {/* DESCRIPTION */}

      <p
        className="mb-0"
        style={{
          fontSize: "12px",
          lineHeight: "1.5",
          color: "#6b5d57",
        }}
      >
        {item.description}
      </p>

    </div>
    
  );
}