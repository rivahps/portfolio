import React, { useEffect } from "react";
import awardsData from "../data/awardsData.json";
import "./About.css";

export const About = () => {
  useEffect(() => {
    document.title = "About | Rivah Somerville";
  }, []);
  return (
    <div className="page-container about-page">
      <div className="content-container">
        <h1>About Me</h1>

        {/* About Section */}
        <section className="section-featured">
          <h2>Who I Am</h2>
          <div className="about-profile">
            <div className="profile-image-container">
              <img
                src={require("../assets/images/Rivah.jpeg")}
                alt="Rivah Somerville portrait"
                className="profile-image"
              />
              <p className="name-text">Rivah Somerville</p>
              <p className="pronouns-text">he/they</p>
            </div>
            <div className="about-description">
              <p>
                I am a motivated, enthusiastic, organised problem-solver, driven
                to hone my skills and learn from others. I recently completed a
                Bachelor of Engineering (Honours), specialising in Computer
                Systems. This degree allows me to further my studies in software
                development, while also allowing me to gain a better
                understanding of the systems it is built upon and take an
                engineering, problem-solving approach to my work.
              </p>
              <p>
                I am always excited to learn something new, whether it's finding
                a new and or more efficient way to program, teachers and friends
                showing me a different perspective on an idea, or just finding
                fun trivia I can share with my friends. I love to solve problems
                and work with others, sharing what I've learned and acquiring
                new skills and knowledge from others along the way.
              </p>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="section-featured">
          <h2>Awards</h2>
          <ul className="achievements-list">
            {awardsData.map((award, idx) => (
              <li key={idx} className="achievement-item">
                <strong>{award.award}</strong>
                {award.details && " \u2013 "}
                {award.details && <em>{award.details}</em>}
              </li>
            ))}
          </ul>
        </section>

        {/* Skills Section */}
        <section className="section-featured">
          <h2>Skills</h2>
          <div className="skills-lists">
            <div className="skills-list">
              <h3>Programming Languages</h3>
              <ul>
                <li>Java, JavaScript (ES6+)</li>
                <li>C, C#, .NET</li>
                <li>Python</li>
                <li>React, Node.js</li>
                <li>HTML5, CSS3, XML</li>
              </ul>
            </div>
            <div className="skills-list">
              <h3>Programs & Tools</h3>
              <ul>
                <li>Microsoft Office Suite, Google Workspace</li>
                <li>Git, GitHub, Azure DevOps, Jenkins</li>
                <li>Jira, Trello, Miro, Canva</li>
                <li>Visual Studio, Android Studio</li>
                <li>Figma, Adobe Photoshop</li>
                <li>macOS, Windows</li>
              </ul>
            </div>
            <div className="skills-list">
              <h3>Other Skills</h3>
              <ul>
                <li>Documentation</li>
                <li>Teamwork and Leadership Skills</li>
                <li>Presentation Skills</li>
                <li>Microcontroller Programming</li>
                <li>Analog Circuit Design</li>
                <li>Embedded Systems</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="section-featured">
          <h2>Interests</h2>
          <p>
            I'm passionate about storytelling across mediums: films, games, and
            books, enjoying everything from Nimona and Blade Runner to Stardew
            Valley and Dimension 20. I have a deep knowledge of Star Wars lore
            and love to support local authors and comic shops. In my free time,
            I love exploring the city, discovering hidden gems and parks, while
            listening to indie pop music or D&D podcasts.
          </p>
          <div className="interests-list">
            <div className="interest-item">
              <img
                src={require("../assets/images/Show-Poster.jpeg")}
                alt="Pantheon (2022) TV show poster"
              />
              <div className="interest-item-details">
                <h4>Favourite Show</h4>
                <p>Pantheon</p>
              </div>
            </div>
            <div className="interest-item">
              <img
                src={require("../assets/images/Book-Cover.jpeg")}
                alt="Star Wars: Light of the Jedi book cover"
              />
              <div className="interest-item-details">
                <h4>Favourite Book</h4>
                <p>"Star Wars: Light of the Jedi" by Charles Soule</p>
              </div>
            </div>
            <div className="interest-item">
              <img
                src={require("../assets/images/Game-Poster.jpeg")}
                alt="Stardew Valley game poster"
              />
              <div className="interest-item-details">
                <h4>Favourite Game</h4>
                <p>Stardew Valley</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio & Contact Links Section */}
        <section className="section-featured">
          <h2>Want to see more or get in touch?</h2>
          <div className="links-row">
            <a className="btn" href="/portfolio">
              View Portfolio
            </a>
            <a className="btn" href="/contact">
              Contact Me
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
