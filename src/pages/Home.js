import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";

export const Home = () => {
  useEffect(() => {
    document.title = "Home | Rivah Somerville";
  }, []);
  return (
    <div className="page-container home-page">
      {/* Hero Section */}
      <div className="hero-container">
        <HeroSection />
      </div>

      <div className="content-container">
        {/* About Section */}
        <section className="section-featured">
          <h2>About Me</h2>
          <p>
            Hi! I'm Rivah, a software engineer based in New Zealand. You can
            find out more about me below.
          </p>
          <a href="/about" className="btn">
            Learn more
          </a>
        </section>

        {/* Portfolio Section */}
        <section className="section-featured">
          <h2>Portfolio</h2>
          <p>
            Explore my recent work, education, and skills. Check out some of my
            past projects and what I've been working on lately.
          </p>
          <div className="button-group">
            <a href="/portfolio" className="btn">
              View Portfolio
            </a>
            <a href="/projects" className="btn">
              See Projects
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-featured">
          <h2>Contact</h2>
          <p>
            Want to get in touch? Send me a message and I'll get back to you
            soon!
          </p>
          <a href="/contact" className="btn">
            Contact Me
          </a>
        </section>
      </div>
    </div>
  );
};

export default Home;
