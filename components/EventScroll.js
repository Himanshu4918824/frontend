"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

export default function EventScroll() {
  const sliderRef = useRef(null);

  var data = [
    {
      eventname: "Independence Day Camp",
      area: "Bihar patna",
      picture: "aboutpic.png",
      productstatus: "Treanding",
    },
    {
      eventname: "Independence Day Camp",
      area: "Bihar patna",
      picture: "aboutpic.png",
      productstatus: "Treanding",
    },
    {
      eventname: "Independence Day Camp",
      area: "Bihar patna",
      picture: "aboutpic.png",
      productstatus: "Treanding",
    },
    {
      eventname: "Independence Day Camp",
      area: "Bihar patna",
      picture: "aboutpic.png",
      productstatus: "Treanding",
    },
    {
      eventname: "Independence Day Camp",
      area: "Bihar patna",
      picture: "aboutpic.png",
      productstatus: "Treanding",
    },
    {
      eventname: "Independence Day Camp",
      area: "Bihar patna",
      picture: "aboutpic.png",
      productstatus: "Treanding",
    },
    {
      eventname: "Independence Day Camp",
      area: "Bihar patna",
      picture: "aboutpic.png",
      productstatus: "Treanding",
    },
    {
      eventname: "Independence Day Camp",
      area: "Bihar patna",
      picture: "aboutpic.png",
      productstatus: "Treanding",
    },
    {
      eventname: "Independence Day Camp",
      area: "Bihar patna",
      picture: "aboutpic.png",
      productstatus: "Treanding",
    },
  ];

  const showData = () => {
    return data.map((item, i) => {
      return (
        <div key={i} className="px-2">
          <div
            className="card border-0 h-100"
            style={{
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            {/* Image */}
            <div className="w-100">
              <img
                src={`images/${item.picture}`}
                className="img-fluid w-100"
                style={{
                  height: "210px",
                  objectFit: "cover",
                }}
                alt={item.eventname}
              />
            </div>

            {/* Content */}
            <div className="pt-3">
              <div
                className="fw-bold"
                style={{
                  fontSize: "17px",
                }}
              >
                {item.eventname}
              </div>

              <div
                className="mt-2 text-muted"
                style={{
                  fontSize: "14px",
                }}
              >
                <i className="bi bi-geo-alt-fill me-2"></i>
                {item.area}
              </div>

              <div
                className="mt-2"
                style={{
                  color: "#a00012",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                View Details →
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container py-4 py-md-5">
      {/* Heading */}
      <div
        className="mb-4"
        style={{
          fontSize: "24px",
          fontWeight: 700,
          letterSpacing: 1.2,
          textTransform: "capitalize",
        }}
      >
        Upcoming{" "}
        <span style={{ color: "#a00012" }}>
          Events
        </span>
      </div>

      {/* Slider */}
      <div
        className="position-relative"
        style={{
          padding: "0 30px",
        }}
      >
        {/* Left Arrow */}
        <button
          type="button"
          onClick={() => sliderRef.current?.slickPrev()}
          className="btn p-0 position-absolute top-50 start-0 translate-middle-y border-0"
          style={{
            zIndex: 5,
            background: "transparent",
          }}
        >
          <i
            className="bi bi-arrow-left-circle-fill"
            style={{
              fontSize: "28px",
              color: "#a00012",
            }}
          ></i>
        </button>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {showData()}
        </Slider>

        {/* Right Arrow */}
        <button
          type="button"
          onClick={() => sliderRef.current?.slickNext()}
          className="btn p-0 position-absolute top-50 end-0 translate-middle-y border-0"
          style={{
            zIndex: 5,
            background: "transparent",
          }}
        >
          <i
            className="bi bi-arrow-right-circle-fill"
            style={{
              fontSize: "28px",
              color: "#a00012",
            }}
          ></i>
        </button>
      </div>
    </div>
  );
}