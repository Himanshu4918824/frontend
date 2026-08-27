"use client";

export default function Gallery() {
  const galleryData = [
    { image: "aboutpic.png" },
    { image: "homepic.png" },
    { image: "tree.png" },
    { image: "aboutpic.png" },
    { image: "homepic.png" },
  ];

  return (
    <section
      className="py-5"
      style={{ background: "#fff" }}
    >
      <div className="container">

        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-end mb-3">

          {/* LEFT */}
          <div>
            <div
              style={{
                color: "#9d172c",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                marginBottom: "5px",
              }}
            >
              Gallery
            </div>

            <h2
              className="mb-0"
              style={{
                fontSize: "27px",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#151515",
              }}
            >
              Moments Of{" "}
              <span style={{ color: "#a00012" }}>
                Change
              </span>
            </h2>
          </div>

          {/* VIEW GALLERY */}
          <a
            href="#"
            className="text-decoration-none d-flex align-items-center gap-2"
            style={{
              color: "#8f1729",
              fontSize: "12px",
              fontWeight: 600,
              marginBottom: "3px",
            }}
          >
            <span>View Full Gallery</span>

            <span
              style={{
                fontSize: "18px",
                lineHeight: 1,
              }}
            >
              →
            </span>
          </a>
        </div>

        {/* GALLERY */}
        <div className="row g-2">

          {galleryData.map((item, index) => (
            <div
              className="col-6 col-md-4 col-lg"
              key={index}
            >
              <div
                style={{
                  width: "100%",
                  height: "155px",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={`/images/${item.image}`}
                  alt={`BBL Gallery ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}