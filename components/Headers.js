"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <header>

      {/* ================= TOP BAR ================= */}
      <div className="topbar">
        <div className="container">
          <div className="row align-items-center">

            {/* Contact Information */}
            <div className="col-12 col-lg-8">
              <div className="top-contact">

                <span>
                  <i className="bi bi-telephone-fill"></i>
                  +91 91234 xxxxxx
                </span>

                <span>
                  <i className="bi bi-envelope-fill"></i>
                  info@bbl.org
                </span>

                <span>
                  <i className="bi bi-geo-alt-fill"></i>
                  Patna, Bihar
                </span>

              </div>
            </div>

            {/* Follow Us - Desktop Only */}
            <div className="col-lg-4 d-none d-lg-block">
              <div className="social-links">

                <span>Follow Us :</span>

                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>

                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>

                <a href="#">
                  <i className="bi bi-twitter-x"></i>
                </a>

                <a href="#">
                  <i className="bi bi-youtube"></i>
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>


      {/* ================= MAIN NAVBAR ================= */}
      <nav className="navbar navbar-expand-lg main-navbar">
        <div className="container">

          {/* LOGO */}
          <Link
            href="/"
            className="navbar-brand logo-box"
            onClick={handleMenuClick}
          >
            <Image
              src="/images/logo.png"
              alt="BBL Logo"
              width={60}
              height={60}
              className="logo-icon"
              priority
            />

            <div className="logo-text">
              <div className="logo-title">
                BBL
              </div>

              <div className="logo-subtitle">
                BIHAR BASED LEAGUE
              </div>
            </div>
          </Link>


          {/* MOBILE BUTTON */}
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>


          {/* MENU */}
          <div
            className={`collapse navbar-collapse ${
              menuOpen ? "show" : ""
            }`}
          >

            <ul className="navbar-nav ms-auto align-items-lg-center">

              <li className="nav-item">
                <Link
                  href="/"
                  className="nav-link active"
                  onClick={handleMenuClick}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/about"
                  className="nav-link"
                  onClick={handleMenuClick}
                >
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/events"
                  className="nav-link"
                  onClick={handleMenuClick}
                >
                  Events
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/gallery"
                  className="nav-link"
                  onClick={handleMenuClick}
                >
                  Gallery
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/contact"
                  className="join-btn"
                  onClick={handleMenuClick}
                >
                  Join Us
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </li>

            </ul>

          </div>

        </div>
      </nav>

    </header>
  );
}