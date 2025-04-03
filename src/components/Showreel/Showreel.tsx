"use client";

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
      textSize: "text-9xl",
      buttonText: "SKOÐA NÁMSKEIÐ",
      buttonLink: "namskeid",
    },
    {
      image: "slider2.png",
      text: "Búum til\nSTERKARI BÖRN",
      textSize: "text-8xl",
      buttonText: "SKOÐA FRÍAN PRUFUTÍMA",
      buttonLink: "prufutimi",
    },
  ];

  return (
    <motion.div
      className="w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={loading ? { opacity: 0 } : { opacity: 1 }}
    >
      <Slider {...settings} className="bg-black">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="!flex items-center justify-center h-[60vh] w-full"
          >
            <div
              className="relative w-full h-full bg-cover bg-center bg-black/30"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <motion.div
                className={`
								absolute inset-0 flex flex-col items-center 
								justify-center gap-20
							`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
              >
                <h1
                  className={`
							text-sigma-red font-bold 
							break-words text-balance text-center
							${slide.textSize || "text-4xl"}
						`}
                >
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
                >
                  <Link
                    className={`p-8 px-10 bg-sigma-red text-alpha-beige font-bold hover:text-sigma-red hover:bg-alpha-beige transition duration-300 ease-in-out`}
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
