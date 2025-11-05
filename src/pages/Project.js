import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { formatMonthYear } from "../utils/dateUtils";
import projectsData from "../data/projectsData.json";
import "./Project.css";
import NotFound from "./NotFound";

const Project = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    if (project && project.title) {
      document.title = `${project.title} | Rivah Somerville`;
    }
  }, [project]);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="page-container project-page">
      <div className="content-container">
        <div className="project-info">
          <h1>{project.title}</h1>
          <p>
            <strong>Status:</strong> {project.status}
          </p>
          <p>
            <i>
              {formatMonthYear(project.startDate)} -{" "}
              {formatMonthYear(project.endDate)}
            </i>
          </p>
          <p>{project.description}</p>
          {project.tags?.length > 0 && (
            <div className="project-tags">
              <strong>Tags:</strong>
              <div className="project-tags-list">
                {project.tags.map((tag, idx) => (
                  <span className="project-tag" key={idx}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        {project.image && project.image.trim() !== "" && (
          <div className="project-image-container">
            <img
              className="project-image"
              src={project.image}
              alt={project.alt || project.title}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
