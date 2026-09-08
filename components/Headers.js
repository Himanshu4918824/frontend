"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() 
{
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-white border-bottom">

      <nav className="navbar navbar-expand-lg py-2">

        <div className="container">

          {/* ================= LOGO / BRAND ================= */}

          <Link
            href="/"
            className="navbar-brand d-flex align-items-center text-decoration-none"
            onClick={handleMenuClick}
          >

            {/* LOGO */}

            <div className="logo-wrapper flex-shrink-0 me-2 me-sm-3">

              <Image
                src="/images/logo.png"
                alt="Bihar Bachayega Loktantra"
                width={46}
                height={46}
                className="img-fluid"
                priority
              />

            </div>


            {/* BRAND TEXT */}

            <div className="brand-text">

              <div className="brand-title fw-bold text-dark">
                Bihar Bachayega Loktantra
              </div>

              <div className="brand-subtitle text-secondary">
                A National Constitutional Inquiry (2026–2027)
              </div>

            </div>

          </Link>


          {/* ================= MOBILE TOGGLER ================= */}

          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <i className="bi bi-x-lg fs-4"></i>
            ) : (
              <i className="bi bi-list fs-3"></i>
            )}
          </button>


          {/* ================= NAVIGATION ================= */}

          <div
            className={`collapse navbar-collapse ${
              menuOpen ? "show" : ""
            }`}
          >

            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">

              {/* HOME */}

              <li className="nav-item">
                <Link
                  href="/"
                  className="nav-link fw-semibold text-dark px-0"
                  onClick={handleMenuClick}
                >
                  Home
                </Link>
              </li>


              {/* ABOUT */}

              <li className="nav-item">
                <Link
                  href="/about"
                  className="nav-link fw-semibold text-dark px-0"
                  onClick={handleMenuClick}
                >
                  About Us
                </Link>
              </li>


              {/* EVENTS */}

              <li className="nav-item">
                <Link
                  href="/events"
                  className="nav-link fw-semibold text-dark px-0"
                  onClick={handleMenuClick}
                >
                  Events
                </Link>
              </li>


              {/* ARCHIVE */}

              <li className="nav-item">
                <Link
                  href="/archive"
                  className="nav-link fw-semibold text-dark px-0"
                  onClick={handleMenuClick}
                >
                  Archive
                </Link>
              </li>


              {/* CONTRIBUTE */}

              <li className="nav-item">
                <Link
                  href="/contribute"
                  className="nav-link fw-semibold text-dark px-0"
                  onClick={handleMenuClick}
                >
                  Contribute
                </Link>
              </li>


              {/* LANGUAGE */}

              <li className="nav-item ms-lg-4">

                <div
                  className="d-flex align-items-center gap-1 text-dark fw-semibold"
                  style={{
                    fontSize: "13px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span>English</span>

                  <span className="text-secondary">
                    /
                  </span>

                  <span>हिन्दी</span>
                </div>

              </li>


              {/* SEARCH */}

              <li className="nav-item">

                <button
                  type="button"
                  className="btn border-0 p-0 text-dark"
                  aria-label="Search"
                >
                  <i
                    className="bi bi-search"
                    style={{
                      fontSize: "17px",
                    }}
                  ></i>
                </button>

              </li>


              {/* DONATE */}

              <li className="nav-item ms-lg-2 mt-3 mt-lg-0">

                <Link
                  href="/donate"
                  className="
                    btn
                    text-white
                    fw-semibold
                    rounded-1
                    px-4
                    py-2
                  "
                  style={{
                    backgroundColor: "#a93627",
                    fontSize: "13px",
                  }}
                  onClick={handleMenuClick}
                >
                  Donate
                </Link>

              </li>

            </ul>

          </div>

        </div>

      </nav>


      {/* ================= MOBILE RESPONSIVE ================= */}

      <style jsx>{`

        .brand-title {
          font-size: 20px;
          line-height: 1.1;
          white-space: nowrap;
        }

        .brand-subtitle {
          font-size: 12px;
          line-height: 1;
          margin-top: 5px;
          white-space: nowrap;
        }

        .logo-wrapper {
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
        }


        /* ================= MOBILE ================= */

        @media (max-width: 575.98px) {

          .logo-wrapper {
            width: 38px;
            height: 38px;
          }

          .brand-title {
            font-size: 15px;
            line-height: 1.1;
          }

          .brand-subtitle {
            font-size: 8px;
            margin-top: 3px;
          }

        }


        /* ================= VERY SMALL PHONES ================= */

        @media (max-width: 380px) {

          .logo-wrapper {
            width: 34px;
            height: 34px;
          }

          .brand-title {
            font-size: 13px;
          }

          .brand-subtitle {
            font-size: 7px;
          }

        }

      `}</style>

    </header>
  );
}