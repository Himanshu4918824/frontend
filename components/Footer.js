"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{
        backgroundColor: "#a93627",
      }}
    >

      {/* ================= MAIN FOOTER ================= */}

      <div className="container py-5">

        <div className="row gy-4">

          {/* ================= BRAND ================= */}

          <div className="col-12 col-md-6 col-lg-4">

            <h3
              className="fw-semibold mb-3"
              style={{
                fontSize: "20px",
                letterSpacing: "0.2px",
              }}
            >
              Bihar Bachayega Loktantra
            </h3>

            <p
              className="mb-0"
              style={{
                maxWidth: "290px",
                fontSize: "14px",
                lineHeight: "1.5",
                color: "rgba(255,255,255,0.78)",
              }}
            >
              A national constitutional inquiry exploring the challenges,
              strengths and future possibilities of Indian democracy,
              rooted in Bihar&apos;s civic heritage.
            </p>

          </div>


          {/* ================= EXPLORE ================= */}

          <div className="col-6 col-md-3 col-lg-3">

            <h6
              className="fw-bold mb-3"
              style={{
                fontSize: "14px",
                letterSpacing: "1px",
                color: "#d2a32b",
              }}
            >
              EXPLORE
            </h6>

            <ul className="list-unstyled mb-0">

              <li className="mb-2">
                <Link
                  href="/"
                  className="text-decoration-none"
                  style={{
                    color: "rgba(255,255,255,0.78)",
                    fontSize: "14px",
                  }}
                >
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  href="/about"
                  className="text-decoration-none"
                  style={{
                    color: "rgba(255,255,255,0.78)",
                    fontSize: "14px",
                  }}
                >
                  About Us
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  href="/events"
                  className="text-decoration-none"
                  style={{
                    color: "rgba(255,255,255,0.78)",
                    fontSize: "14px",
                  }}
                >
                  Events
                </Link>
              </li>

              <li>
                <Link
                  href="/archive"
                  className="text-decoration-none"
                  style={{
                    color: "rgba(255,255,255,0.78)",
                    fontSize: "14px",
                  }}
                >
                  Archive
                </Link>
              </li>

            </ul>

          </div>


          {/* ================= GET INVOLVED ================= */}

          <div className="col-6 col-md-3 col-lg-3">

            <h6
              className="fw-bold mb-3"
              style={{
                fontSize: "14px",
                letterSpacing: "1px",
                color: "#d2a32b",
              }}
            >
              GET INVOLVED
            </h6>

            <ul className="list-unstyled mb-0">

              <li className="mb-2">
                <Link
                  href="#"
                  className="text-decoration-none"
                  style={{
                    color: "rgba(255,255,255,0.78)",
                    fontSize: "14px",
                  }}
                >
                  Contribute
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  href="#"
                  className="text-decoration-none"
                  style={{
                    color: "rgba(255,255,255,0.78)",
                    fontSize: "14px",
                  }}
                >
                  Join the Initiative
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-decoration-none"
                  style={{
                    color: "rgba(255,255,255,0.78)",
                    fontSize: "14px",
                  }}
                >
                  Donate
                </Link>
              </li>

            </ul>

          </div>


          {/* ================= CONTACT ================= */}

          <div className="col-12 col-md-6 col-lg-2">

            <h6
              className="fw-bold mb-3"
              style={{
                fontSize: "14px",
                letterSpacing: "1px",
                color: "#d2a32b",
              }}
            >
              CONTACT
            </h6>

            <div
              className="mb-2"
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.78)",
              }}
            >
              info@biharloktantra.org
            </div>

            <div
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.78)",
              }}
            >
              Patna, Bihar
            </div>

          </div>

        </div>


        {/* ================= DIVIDER ================= */}

        <div
          className="border-top mt-5 pt-4"
          style={{
            borderColor: "rgba(255,255,255,0.13) !important",
          }}
        >

          <div className="row gy-2">

            {/* COPYRIGHT */}

            <div className="col-12 col-md-6">

              <p
                className="mb-0"
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                © {new Date().getFullYear()} Bihar Bachayega Loktantra.
                All rights reserved.
              </p>

            </div>


            {/* RIGHT TEXT */}

            <div className="col-12 col-md-6 text-md-end">

              <p
                className="mb-0"
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                A National Constitutional Inquiry, 2026–2027
              </p>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

