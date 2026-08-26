"use client";

import Image from "next/image";
import "../about/page.css";

const values = [
  {
    icon: "bi-bullseye",
    title: "Our Mission",
    text: "To spread awareness and drive positive change through impactful initiatives and events.",
  },
  {
    icon: "bi-eye",
    title: "Our Vision",
    text: "A society where everyone is aware, empowered, and works together for collective good.",
  },
  {
    icon: "bi-heart",
    title: "Our Values",
    text: "We believe in integrity, compassion, inclusivity, and the power of community.",
  },
];

const impact = [
  {
    icon: "bi-people",
    number: "25,000+",
    label: "People Reached",
  },
  {
    icon: "bi-calendar-event",
    number: "120+",
    label: "Events Organized",
  },
  {
    icon: "bi-handshake",
    number: "80+",
    label: "Community Partners",
  },
  {
    icon: "bi-globe2",
    number: "15+",
    label: "Cities Impacted",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">

      {/* ================= HERO ================= */}
      <section className="about-hero">
        <div className="hero-wash hero-wash-left" />
        <div className="hero-wash hero-wash-right" />

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">

              <span className="section-label">
                ABOUT US
              </span>

              <h1 className="about-title">
                About Our Mission,
                <br />
                Our People &{" "}
                <span>Our Purpose</span>
              </h1>

              <div className="title-divider">
                <span />
                <i className="bi bi-heart-fill" />
                <span />
              </div>

              <p className="about-intro">
                We are a group of passionate individuals working together
                to build a more aware, compassionate and empowered society.
                Through events, campaigns and community initiatives,
                we create real impact where it matters most.
              </p>

            </div>
          </div>

          {/* ================= WHO WE ARE ================= */}
          <div className="row align-items-center about-content">

            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="about-image-wrapper">

                <Image
                  src="/images/aboutpic.png"
                  alt="Community awareness event"
                  width={900}
                  height={700}
                  className="about-image"
                  priority
                />

                <div className="image-badge">
                  <div className="badge-icon">
                    <i className="bi bi-people" />
                  </div>

                  <div>
                    <strong>Together for</strong>
                    <br />
                    <span>a better society.</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-copy">

                <span className="small-heading">
                  WHO WE ARE
                </span>

                <h2>
                  We are changemakers,
                  <br />
                  community builders,
                  <br />
                  and dreamers working
                  <br />
                  for a <span>better tomorrow.</span>
                </h2>

                <p>
                  Our journey started with a simple belief — awareness
                  can spark change. Today, we are a growing movement
                  dedicated to spreading knowledge, promoting empathy,
                  and creating opportunities for a brighter,
                  more inclusive future.
                </p>

                <div className="values-row">
                  {values.map((item) => (
                    <div className="value-item" key={item.title}>

                      <div className="value-icon">
                        <i className={`bi ${item.icon}`} />
                      </div>

                      <h3>{item.title}</h3>

                      <p>{item.text}</p>

                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>

          {/* ================= IMPACT ================= */}
          <section className="impact-section">

            <div className="impact-background" />

            <div className="row align-items-center position-relative">

              <div className="col-lg-3 mb-4 mb-lg-0">
                <span className="impact-label">
                  OUR IMPACT
                </span>

                <h2>
                  Small actions,
                  <br />
                  big changes.
                </h2>
              </div>

              <div className="col-lg-9">
                <div className="row">

                  {impact.map((item) => (
                    <div
                      className="col-6 col-md-3 impact-item"
                      key={item.label}
                    >
                      <div className="impact-icon">
                        <i className={`bi ${item.icon}`} />
                      </div>

                      <div className="impact-number">
                        {item.number}
                      </div>

                      <div className="impact-label-text">
                        {item.label}
                      </div>
                    </div>
                  ))}

                </div>
              </div>

            </div>

          </section>

        </div>
      </section>

    </main>
  );
}