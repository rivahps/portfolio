import React from "react";
import "./HeroSection.css";

import heroVideo from "../assets/videos/Path.mp4";
import heroBackground from "../assets/images/Tree.jpeg";
import heroImage from "../assets/images/Rivah.jpeg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <video
        className="hero-video"
        src={heroVideo}
        poster={heroBackground}
        autoPlay
        loop
        muted
        playsInline
      >
        Sorry, your browser does not support embedded videos.
      </video>
      <noscript>
        <img
          className="hero-video-fallback"
          src={heroBackground}
          alt="Hero fallback"
        />
      </noscript>
      <div className="hero-content-wrapper">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi there!{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h1>
          <p className="hero-subtitle">
            I'm Rivah, welcome to my digital home. Here you can find everything
            you need to know about me and my work.
          </p>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Rivah" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
