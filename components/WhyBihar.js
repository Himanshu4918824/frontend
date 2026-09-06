"use client";

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

export default function WhyBihar() {
  return (
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
  );
}