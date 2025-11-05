import React, { useEffect } from "react";
import { formatMonthYear } from "../utils/dateUtils";
import educationData from "../data/educationData.json";
import workExperienceData from "../data/workExperienceData.json";
import projectsData from "../data/projectsData.json";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";

import "./Portfolio.css";

export const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio | Rivah Somerville";
  }, []);

  const recentProjects = [...projectsData].slice(-4).reverse();
  const viewMoreElement = {
    id: "view-more",
    viewMore: true,
  };
  const recentProjectsWithViewMore = [...recentProjects, viewMoreElement];

  return (
    <div className="page-container portfolio-page">
      <div className="content-container">
        <h1>Portfolio</h1>

        <div className="cv-btn-container">
          <a
            className="btn"
            href="/cv"
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV
          </a>
        </div>

        <div className="portfolio-row">
          <section className="section-featured education-container">
            <h2>Education</h2>
            {[...educationData]
              .sort((a, b) => b.endYear - a.endYear)
              .map((edu, idx) => (
                <div key={idx} className="item-block">
                  <h3>{edu.institution}</h3>
                  <p className="item-title">
                    <strong>{edu.degree}</strong>
                  </p>
                  <p className="item-years">
                    {edu.startYear} - {edu.endYear}
                  </p>
                  <ul className="item-details">
                    {edu.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </section>
          <section className="section-featured work-experience-container">
            <h2>Work Experience</h2>
            {[...workExperienceData]
              .sort((a, b) => b.endDate.localeCompare(a.endDate))
              .map((work, idx) => (
                <div key={idx} className="item-block">
                  <h3>{work.company}</h3>
                  <p className="item-title">
                    <strong>{work.role}</strong>
                  </p>
                  <p className="item-years">
                    <i>
                      {formatMonthYear(work.startDate)} -{" "}
                      {formatMonthYear(work.endDate)}
                    </i>
                  </p>
                  <ul className="item-details">
                    {work.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </section>
        </div>

        <section className="section-featured">
          <div className="projects-header">
            <h2>Recent Projects</h2>
            <Link className="btn" to="/projects">
              View All
            </Link>
          </div>
          <div className="portfolio-projects-scroll">
            <Cards
              projects={recentProjectsWithViewMore}
              horizontal
              renderCard={(project) =>
                project.viewMore ? (
                  <div className="view-more-arrow-container">
                    <Link to="/projects" className="view-more-arrow-link">
                      <span className="view-more-arrow-icon">→</span>
                      <span className="view-more-arrow-text">View More</span>
                    </Link>
                  </div>
                ) : null
              }
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
