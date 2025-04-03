"use client";

import "./Showreel.css";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import AnimatedText from "@/components/AnimatedText/AnimatedText";

const Showreel = () => {
  const [buttonDisplayed, setButtonDisplayed] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const [loading, setLoading] = useState(true);

  const textSpeed = 0.6;

  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      setIsOn(true);
      setLoading(false);
    }, 300);
    return () => clearTimeout(loadTimeout);
  }, []);

  useEffect(() => {
    if (isOn) {
      const timer = setTimeout(() => {
        setButtonDisplayed(true);
      }, textSpeed * 1000);

      return () => clearTimeout(timer);
    } else {
      setButtonDisplayed(false);
    }
  }, [isOn]);

  const buttonVar = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "ease-out",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "ease-out",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: true,
    fade: true,
    cssEase: "ease-in-out",
    beforeChange: () => {
      setIsOn(false);
    },
    afterChange: () => {
      setIsOn(true);
    },
  };

  const slides = [
    {
      image: "slider1.png",
      text: "TAEKWONDO",
      buttonText: "SKOÐA NÁMSKEIÐ",
      buttonLink: "namskeid",
    },
    {
      image: "slider2.png",
      text: "Búum til\nSTERKARI BÖRN",
      buttonText: "SKOÐA FRÍAN PRUFUTÍMA",
      buttonLink: "prufutimi",
    },
  ];

  return (
    <motion.div
      className="show-container"
      initial={{ opacity: 0 }}
      animate={loading ? { opacity: 0 } : { opacity: 1 }}
    >
      <Slider {...settings} className="show-slider">
        {slides.map((slide, index) => (
          <div key={index} className="show-slide-container">
            <div
              className="show-slide-img"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <motion.div
                className={`show-slide-content`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
              >
                <h1 className={`show-slide-title`}>
                  <AnimatedText
                    text={slide.text}
                    isOn={isOn}
                    speed={textSpeed}
                  />
                </h1>
                <motion.div
                  variants={buttonVar}
                  animate={buttonDisplayed ? "visible" : "hidden"}
                  initial="hidden"
                  className="show-slide-button-container"
                >
                  <Link
                    className={`show-slide-button`}
                    href={`${slide.buttonLink}`}
                  >
                    {slide.buttonText}
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default Showreel;
