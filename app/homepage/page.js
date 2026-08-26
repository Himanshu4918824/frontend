import Image from "next/image";

const stats = [
  ["bi-people", "50+", "Events Organized"],
  ["bi-heart", "10,000+", "Lives Impacted"],
  ["bi-person", "100+", "Volunteers"],
  ["bi-geo-alt", "15+", "Districts Reached"],
];

const points = [
  {
    icon: "bi-megaphone",
    title: "Create Awareness",
    text: "Through impactful campaigns and programs",
  },
  {
    icon: "bi-people",
    title: "Empower Communities",
    text: "By supporting education, health and livelihood initiatives",
  },
  {
    icon: "bi-bullseye",
    title: "Build A Better Bihar",
    text: "Through unity, service and sustainable development",
  },
];

export default function HomePage() {
  return (
    <div>

      {/* ================= HERO ================= */}

      <section
        className="position-relative"
        style={{
          minHeight: "clamp(620px, 80vh, 700px)",
          overflow: "visible",
        }}
      >
        <Image
          src="/images/homepic.png"
          alt="BBL Team"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(90deg, #000d, #0007, transparent)",
          }}
        />

        {/* Hero Content */}
        <div className="container h-100 position-relative">
          <div className="row align-items-center h-100">

            <div className="col-12 col-md-9 col-lg-7 col-xl-6 text-white">

              <small
                className="fw-bold"
                style={{
                  fontSize: "clamp(10px, 1.5vw, 13px)",
                  letterSpacing: "1.5px",
                }}
              >
                TOGETHER WE CAN ──
              </small>

              <h1
                className="fw-bold my-3"
                style={{
                  fontSize: "clamp(42px, 7vw, 70px)",
                  lineHeight: 0.95,
                }}
              >
                BUILD A
                <br />
                <span style={{ color: "#e21b23" }}>
                  BETTER BIHAR
                </span>
              </h1>

              <p
                className="mb-4"
                style={{
                  maxWidth: "470px",
                  lineHeight: 1.7,
                  color: "#ddd",
                  fontSize: "clamp(13px, 1.5vw, 15px)",
                }}
              >
                BBL is a youth-driven organization working for social
                welfare, awareness, education and community empowerment.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3">

                <button className="btn btn-danger px-4 py-2">
                  Explore Our Events →
                </button>

                <button className="btn btn-outline-light px-4 py-2">
                  Join Our Mission
                </button>

              </div>

            </div>
          </div>
        </div>

        {/* ================= STATS ================= */}

        <div
          className="container position-absolute start-50 translate-middle-x px-3"
          style={{
            bottom: "-65px",
          }}
        >
          <div className="row bg-white rounded-4 shadow overflow-hidden">

            {stats.map(([icon, number, label], index) => (
              <div
                className="col-6 col-lg-3 p-0"
                key={label}
              >
                <div
                  className={`d-flex align-items-center gap-2 gap-sm-3 px-3 px-sm-4 py-3 ${
                    index < 3 ? "border-end" : ""
                  }`}
                  style={{
                    minHeight: "110px",
                    borderColor: "#eee",
                  }}
                >

                  <i
                    className={`bi ${icon} flex-shrink-0`}
                    style={{
                      fontSize: "clamp(22px, 3vw, 30px)",
                      color: "#c71922",
                    }}
                  />

                  <div>
                    <h3
                      className="mb-0 fw-bold"
                      style={{
                        fontSize: "clamp(20px, 3vw, 28px)",
                      }}
                    >
                      {number}
                    </h3>

                    <small
                      className="text-muted"
                      style={{
                        fontSize: "clamp(9px, 1.3vw, 12px)",
                      }}
                    >
                      {label}
                    </small>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= ABOUT ================= */}

      <section className="container py-5 my-4 my-lg-5 px-3 px-lg-4">

        <div className="row align-items-center g-5">

          {/* LEFT CONTENT */}

          <div className="col-12 col-lg-4">

            <span
              style={{
                color: "#9e1720",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "1.5px",
              }}
            >
              ABOUT US
            </span>

            <h2
              className="fw-bold mt-2 mb-3"
              style={{
                fontSize: "clamp(30px, 4vw, 40px)",
                lineHeight: 1.15,
              }}
            >
              We Are A Youth-Driven
              <br />

              <span style={{ color: "#9e1720" }}>
                Social Organization
              </span>
            </h2>

            <p
              className="text-secondary"
              style={{
                fontSize: "14px",
                lineHeight: 1.8,
              }}
            >
              BBL (Bihar Based League) is a non-profit organization
              working for social welfare, awareness, education, health,
              environment and community empowerment. We believe in the
              power of youth and collective action to bring positive
              change in society.
            </p>

            <div className="d-flex align-items-center gap-3 my-4">

              <span
                style={{
                  fontSize: "35px",
                  color: "#222",
                }}
              >
                〰
              </span>

              <b style={{ fontSize: "13px" }}>
                BBL Team
              </b>

            </div>

            <button className="btn btn-danger px-4 py-2">
              Know More About Us
              <i className="bi bi-arrow-right ms-2"></i>
            </button>

          </div>


          {/* CENTER IMAGE */}

          <div className="col-12 col-md-6 col-lg-4">

            <div
              className="position-relative mx-auto"
              style={{
                width: "100%",
                maxWidth: "380px",
                height: "clamp(350px, 55vw, 440px)",
                borderRadius: "20px",
              }}
            >

              <Image
                src="/images/tree.png"
                alt="BBL Team"
                fill
                style={{
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />

              {/* Floating Card */}

              <div
                className="position-absolute bg-white shadow text-center d-none d-sm-block"
                style={{
                  bottom: "-20px",
                  left: "-25px",
                  width: "125px",
                  padding: "18px",
                  borderRadius: "15px",
                  color: "#a71922",
                  fontSize: "11px",
                }}
              >

                <i
                  className="bi bi-people d-block"
                  style={{
                    color: "#a71922",
                    fontSize: "28px",
                    margin: "8px 0",
                  }}
                />

                <span>
                  Building Better
                  <br />
                  Communities
                </span>

              </div>

            </div>

          </div>


          {/* RIGHT CONTENT */}

          <div className="col-12 col-md-6 col-lg-4">

            <div>

              {points.map((item) => (

                <div
                  className="d-flex gap-3 mb-4"
                  key={item.title}
                >

                  {/* Icon */}

                  <div
                    className="flex-shrink-0 d-flex align-items-center justify-content-center"
                    style={{
                      width: "58px",
                      height: "58px",
                      borderRadius: "50%",
                      background: "#fff0f0",
                      color: "#a71922",
                      fontSize: "24px",
                    }}
                  >
                    <i className={`bi ${item.icon}`}></i>
                  </div>

                  {/* Text */}

                  <div>

                    <h3
                      className="fw-bold mb-1"
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="text-secondary mb-0"
                      style={{
                        fontSize: "12px",
                        lineHeight: 1.6,
                        maxWidth: "240px",
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


      {/* ================= IMPACT ================= */}

      <section
        className="py-4"
        style={{
          background:
            "linear-gradient(90deg, #420007e8, #78000be8)",
          color: "white",
        }}
      >

        <div className="container">

          <div className="row align-items-center">

            {/* Heading */}

            <div className="col-12 col-lg-3 mb-4 mb-lg-0">

              <small
                className="fw-bold"
                style={{
                  fontSize: "10px",
                  letterSpacing: "1px",
                }}
              >
                OUR IMPACT
              </small>

              <h2
                className="fw-bold mb-0"
                style={{
                  fontSize: "20px",
                  lineHeight: 1.1,
                }}
              >
                Making A Difference
                <br />

                <span style={{ color: "#ed1c24" }}>
                  In Numbers
                </span>
              </h2>

            </div>


            {/* Stats */}

            <div className="col-12 col-lg-9">

              <div className="row g-0">

                {stats.map(([icon, number, label], index) => (

                  <div
                    className="col-6 col-md-3"
                    key={label}
                  >

                    <div
                      className={`d-flex align-items-center gap-2 gap-sm-3 px-2 px-md-3 py-3 ${
                        index !== 0 ? "border-start" : ""
                      }`}
                      style={{
                        minHeight: "65px",
                        borderColor: "#ffffff40",
                      }}
                    >

                      <i
                        className={`bi ${icon}`}
                        style={{
                          color: "#ed1c24",
                          fontSize: "24px",
                        }}
                      />

                      <div>

                        <h3
                          className="mb-0 fw-bold"
                          style={{
                            fontSize: "20px",
                          }}
                        >
                          {number}
                        </h3>

                        <p
                          className="mb-0"
                          style={{
                            color: "#ddd",
                            fontSize: "10px",
                          }}
                        >
                          {label}
                        </p>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}