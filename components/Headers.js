"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Header() 
{

   useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);


  return (
    <header>

      {/* Top Bar */}
      <div className="topbar">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-8">
              <div className="d-flex gap-4 align-items-center">

                <span>
                  <i className="bi bi-telephone-fill me-2"></i>
                  +91 91234 xxxxxx
                </span>

                <span>
                  <i className="bi bi-envelope-fill me-2"></i>
                  info@bbl.org
                </span>

                <span>
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  Patna, Bihar, India
                </span>

              </div>
            </div>

            <div className="col-lg-4">
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


      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg main-navbar">

        <div className="container">

          {/* Logo */}
          <Link href="/" className="navbar-brand logo-box">
            <Image
             src="/images/logo.png"
             alt="BBL Logo"
             width={75}
             height={75}
             className="logo-icon"
             loading="eager"
            />

             <div className="logo-text">
               <div className="logo-title">BBL</div>
                <div className="logo-subtitle">BIHAR BASED LEAGUE</div>
             </div>
</Link>


          {/* Mobile Menu Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>


          {/* Menu */}
          <div
            className="collapse navbar-collapse"
            id="mainNavbar"
          >

            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

              <li className="nav-item">
                <Link
                  href="/"
                  className="nav-link active"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/about"
                  className="nav-link"
                >
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/events"
                  className="nav-link"
                >
                  Events
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/gallery"
                  className="nav-link"
                >
                  Gallery
                </Link>
              </li>

              <li className="nav-item ms-lg-3">
                <Link
                  href="/contact"
                  className="join-btn"
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