"use client";

import Gallery from "./Gallery";

const data = [
  {
    text: "The optimism done by a poor being or a poor household gives evidence of their acumen and the power of optimism",
    position: "top",
  },
  {
    text: "Bihar has never merely reacted to history.It has repeatedly helped shape it.The republican traditions of Vaishali demonstrated collective self-government centuries before many modern democracies.",
    position: "bottom",
  },
  {
    text: "Bihar has never merely reacted to history.It has repeatedly helped shape it.The republican traditions of Vaishali demonstrated collective self-government centuries before many modern democracies.",
    position: "top",
  },
  {
    text: "Bihar has never merely reacted to history.It has repeatedly helped shape it.The republican traditions of Vaishali demonstrated collective self-government centuries before many modern democracies.",
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
  
  return (<div>
    <section className="bg-white py-5 overflow-hidden">
      <div className="container">

        {/* ================= HEADER ================= */}

        <div className="mb-4">

          <h2
            className="mb-1 fw-bold"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "38px",
              lineHeight: "1.1",
              color: "#111",
            }}
          >
            Why{" "}
            <span style={{ color: "#a63828" }}>
              Bihar?
            </span>
          </h2>

          <p
            className="mb-0 fw-semibold"
            style={{
              fontSize: "17px",
              color: "#5a4b45",
            }}
          >
            From Vaishali&apos;s councils to Nalanda&apos;s courtyards, Bihar
          </p>

        </div>


        {/* =====================================================
                            DESKTOP TIMELINE
        ====================================================== */}

        <div
          className="d-none d-md-block position-relative mx-auto"
          style={{
            maxWidth: "1000px",
            height: "500px",
            marginTop: "35px",
          }}
        >

          {/* ================= HORIZONTAL LINE ================= */}

          <div
            className="position-absolute start-0 end-0"
            style={{
              top: "238px",
              height: "2px",
              background: "#eaded6",
            }}
          />


          {/* ================= ITEMS ================= */}

          <div className="row g-0 h-100">

            {data.map((item, index) => (

              <div
                className="col-3 position-relative d-flex flex-column align-items-center"
                key={index}
              >

                {/* =================================================
                                  TOP CARD
                ================================================== */}

                {item.position === "top" && (
                  <>

                    {/* CARD */}

                    <div
                      className="
                        bg-white
                        border
                        rounded-1
                        p-3
                        position-absolute
                      "
                      style={{
                        width: "180px",
                        height: "220px",
                        top: "0",
                        borderColor: "#eaded6",
                      }}
                    >

                      <div className="d-flex align-items-end h-100">

                        <p
                          className="mb-0"
                          style={{
                            fontSize: "11px",
                            lineHeight: "1.4",
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
                        top: "220px",
                        height: "18px",
                        borderColor: "#eaded6",
                      }}
                    />


                    {/* DOT */}

                    <div
                      className="
                        position-absolute
                        rounded-circle
                        bg-white
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                      style={{
                        top: "232px",
                        width: "13px",
                        height: "13px",
                        border: "1px solid #eaded6",
                      }}
                    >

                      <div
                        className="rounded-circle"
                        style={{
                          width: "4px",
                          height: "4px",
                          background: "#b43b29",
                        }}
                      />

                    </div>

                  </>
                )}


                {/* =================================================
                                  BOTTOM CARD
                ================================================== */}

                {item.position === "bottom" && (
                  <>

                    {/* DOT */}

                    <div
                      className="
                        position-absolute
                        rounded-circle
                        bg-white
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                      style={{
                        top: "232px",
                        width: "13px",
                        height: "13px",
                        border: "1px solid #eaded6",
                      }}
                    >

                      <div
                        className="rounded-circle"
                        style={{
                          width: "4px",
                          height: "4px",
                          background: "#b43b29",
                        }}
                      />

                    </div>


                    {/* CONNECTOR */}

                    <div
                      className="position-absolute border-start"
                      style={{
                        top: "245px",
                        height: "28px",
                        borderColor: "#eaded6",
                      }}
                    />


                    {/* CARD */}

                    <div
                      className="
                        bg-white
                        border
                        rounded-1
                        p-3
                        position-absolute
                      "
                      style={{
                        width: "180px",
                        height: "195px",
                        top: "273px",
                        borderColor: "#eaded6",
                      }}
                    >

                      <div className="d-flex align-items-center h-100">

                        <p
                          className="mb-0"
                          style={{
                            fontSize: "11px",
                            lineHeight: "1.4",
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
                background: "#eaded6",
              }}
            />

            {data.map((item, index) => (

              <div
                className="d-flex position-relative mb-4"
                key={index}
              >

                {/* DOT */}

                <div
                  className="
                    rounded-circle
                    border
                    bg-white
                    d-flex
                    align-items-center
                    justify-content-center
                    flex-shrink-0
                    position-relative
                  "
                  style={{
                    width: "16px",
                    height: "16px",
                    borderColor: "#eaded6",
                    zIndex: 2,
                  }}
                >

                  <div
                    className="rounded-circle"
                    style={{
                      width: "5px",
                      height: "5px",
                      background: "#b43b29",
                    }}
                  />

                </div>


                {/* CARD */}

                <div
                  className="
                    border
                    rounded-1
                    bg-white
                    ms-3
                    p-3
                    flex-grow-1
                  "
                  style={{
                    borderColor: "#eaded6",
                  }}
                >

                  <p
                    className="mb-0"
                    style={{
                      fontSize: "12px",
                      lineHeight: "1.5",
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

    <div>
      <section
      className="py-5"
      style={{
        backgroundColor: "#faf6f0",
      }}
    >
      <div className="container">

        {/* ================= HEADER ================= */}

        <div className="mb-5">

          <h2
            className="fw-bold mb-2"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "38px",
              lineHeight: "1.1",
              color: "#111",
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
              fontSize: "18px",
              color: "#493b35",
            }}
          >
            Six ways the inquiry is being carried out
          </p>

        </div>


        {/* ================= TOP ROW ================= */}

        <div className="row g-3">

          {/* ================= FEATURED CARD ================= */}

          <div className="col-12 col-lg-8">

            <div
              className="rounded-1 h-100 p-4 p-md-5 text-white d-flex flex-column justify-content-between"
              style={{
                backgroundColor: "#aa3d2d",
                minHeight: "266px",
              }}
            >

              <div>

                <h3
                  className="fw-semibold mb-2"
                  style={{
                    fontSize: "22px",
                  }}
                >
                  District Consultations
                </h3>

                <p
                  className="mb-0"
                  style={{
                    maxWidth: "370px",
                    fontSize: "13px",
                    lineHeight: "1.4",
                    color: "rgba(255,255,255,0.82)",
                  }}
                >
                  Open conversations across all of Bihar&apos;s districts,
                  gathering firsthand experiences of democracy from
                  panchayats to city wards.
                </p>

              </div>


              {/* STATS */}

              <div className="d-flex gap-5 mt-4">

                <div>

                  <div
                    className="fw-bold"
                    style={{
                      fontSize: "22px",
                      lineHeight: "1",
                    }}
                  >
                    38
                  </div>

                  <div
                    className="mt-1"
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    Districts
                  </div>

                </div>


                <div>

                  <div
                    className="fw-bold"
                    style={{
                      fontSize: "22px",
                      lineHeight: "1",
                    }}
                  >
                    120+
                  </div>

                  <div
                    className="mt-1"
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    Sessions Held
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* ================= RIGHT STACK ================= */}

          <div className="col-12 col-lg-4">

            <div className="row g-3">

              {programs.slice(0, 2).map((item, index) => (

                <div
                  className="col-12"
                  key={index}
                >

                  <div
                    className="bg-white border rounded-1 p-3"
                    style={{
                      minHeight: "127px",
                      borderColor: "#eaded6",
                    }}
                  >

                    <i
                      className={`bi ${item.icon}`}
                      style={{
                        color: "#b43829",
                        fontSize: "17px",
                      }}
                    ></i>


                    <h6
                      className="fw-bold mt-4 mb-1"
                      style={{
                        fontFamily:
                          'Georgia, "Times New Roman", serif',
                        fontSize: "13px",
                        color: "#302621",
                      }}
                    >
                      {item.title}
                    </h6>


                    <p
                      className="mb-0"
                      style={{
                        fontSize: "10px",
                        lineHeight: "1.45",
                        color: "#6b5d57",
                      }}
                    >
                      {item.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* ================= BOTTOM ROW ================= */}

        <div className="row g-3 mt-0">

          {programs.slice(2).map((item, index) => (

            <div
              className="col-12 col-md-6 col-lg-4"
              key={index}
            >

              <div
                className="bg-white border rounded-1 p-3 h-100"
                style={{
                  minHeight: "126px",
                  borderColor: "#eaded6",
                }}
              >

                {/* ICON */}

                <i
                  className={`bi ${item.icon}`}
                  style={{
                    color: "#b43829",
                    fontSize: "17px",
                  }}
                ></i>


                {/* TITLE */}

                <h6
                  className="fw-bold mt-4 mb-1"
                  style={{
                    fontFamily:
                      'Georgia, "Times New Roman", serif',
                    fontSize: "13px",
                    color: "#302621",
                  }}
                >
                  {item.title}
                </h6>


                {/* DESCRIPTION */}

                <p
                  className="mb-0"
                  style={{
                    fontSize: "10px",
                    lineHeight: "1.45",
                    color: "#6b5d57",
                  }}
                >
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
    </div>

    <div>
      <Gallery/>
    </div>

    
  </div>);
}