"use client";

export default function Gallery() {
  const galleryData = [
    { image: "aboutpic.png" },
    { image: "aboutpic.png" },
    { image: "aboutpic.png" },
    { image: "aboutpic.png" },
     { image: "aboutpic.png" },
  ];

  return (
    <section
      style={{
        padding: "45px 0",
        background: "#fff",
      }}
    >
      <div className="container">

        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "18px",
          }}
        >

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
              style={{
                margin: 0,
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
            href="/gallery"
            style={{
              textDecoration: "none",
              color: "#8f1729",
              fontSize: "12px",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "3px",
            }}
          >
            View Full Gallery
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "8px",
          }}
        >

          {galleryData.map((item, index) => (
            <div
              key={index}
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
          ))}

        </div>

      </div>
    </section>
  );
}