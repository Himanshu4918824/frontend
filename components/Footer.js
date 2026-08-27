import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bbl-footer">

      {/* ================= CTA SECTION ================= */}
      <div className="footer-cta">
        <div className="container">
          <div className="row align-items-center">

            {/* Logo / Icon */}
            <div className="col-auto">
              <div className="change-icon">
                <i className="bi bi-heart"></i>
              </div>
            </div>

            {/* Text */}
            <div className="col">
              <h3>
                Be A Part Of <span>Change</span>
              </h3>
              <p>
                Join hands with us to be the reason someone smiles today.
              </p>
            </div>

            {/* Button */}
            <div className="col-auto">
              <Link href="#" className="join-btn">
                Join Us Today
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>

          </div>
        </div>
      </div>


      {/* ================= MAIN FOOTER ================= */}
      <div className="footer-main">
        <div className="container">
          <div className="row gy-5">

            {/* ================= BRAND ================= */}
            <div className="col-lg-3 col-md-6">

              <div className="footer-brand">

                {/* Replace with your actual logo */}
                <div className="brand-logo">
                  <div className="logo-circle">
                    <img src="images/logo.png"/>
                  </div>

                  <div>
                    <h2>BBL</h2>
                    <small>BIHAR BASED LEAGUE</small>
                  </div>
                </div>

                <p className="brand-description">
                  Together we can create a better Bihar for today and a
                  brighter tomorrow.
                </p>

                {/* Social Media */}
                <div className="social-links">
                  <a href="#" aria-label="Facebook">
                    <i className="bi bi-facebook" style={{color:'#fff',fontSize:16}}></i>
                  </a>

                  <a href="#" aria-label="Instagram">
                    <i className="bi bi-instagram" style={{color:'#fff',fontSize:16}}></i>
                  </a>

                  <a href="#" aria-label="Twitter">
                    <i className="bi bi-twitter" style={{color:'#fff',fontSize:16}}></i>
                  </a>

                  <a href="#" aria-label="YouTube">
                    <i className="bi bi-youtube" style={{color:'#fff',fontSize:16}}></i>
                  </a>
                </div>

              </div>
            </div>


            {/* ================= QUICK LINKS ================= */}
            <div className="col-lg-2 col-md-6">

              <h5 className="footer-heading">
                Quick Links
              </h5>

              <ul className="footer-links">
                <li>
                  <Link href="/">Home</Link>
                </li>

                <li>
                  <Link href="/about">About Us</Link>
                </li>

                <li>
                  <Link href="#">Events</Link>
                </li>

                <li>
                  <Link href="#">Gallery</Link>
                </li>
              </ul>

            </div>


            {/* ================= PROGRAMS ================= */}
            <div className="col-lg-2 col-md-6">

              <h5 className="footer-heading">
                Our Programs
              </h5>

              <ul className="footer-links">
                <li>
                  <Link href="#">
                    Awareness
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    Education
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    Health
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    Environment
                  </Link>
                </li>
              </ul>

            </div>


            {/* ================= CONTACT ================= */}
            <div className="col-lg-2 col-md-6">

              <h5 className="footer-heading">
                Get In Touch
              </h5>

              <div className="contact-item">
                <i className="bi bi-geo-alt"></i>
                <span>
                  Patna, Bihar, India
                </span>
              </div>

              <div className="contact-item">
                <i className="bi bi-telephone"></i>
                <span>
                  +91 91234 xxxxx
                </span>
              </div>

              <div className="contact-item">
                <i className="bi bi-envelope"></i>
                <span>
                  info@bbl.org
                </span>
              </div>

            </div>


            {/* ================= NEWSLETTER ================= */}
            <div className="col-lg-3 col-md-6">

              <h5 className="footer-heading">
                Newsletter
              </h5>

              <p className="newsletter-text">
                Subscribe to our newsletter to get our latest updates.
              </p>

              <form className="newsletter-form">

                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />

                <button type="submit">
                  <i className="bi bi-send-fill"></i>
                </button>

              </form>

            </div>

          </div>
        </div>
      </div>


      {/* ================= COPYRIGHT ================= */}
      <div className="footer-bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Bihar Based League. All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;