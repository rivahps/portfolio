import React, { useEffect, useState } from "react";
import projectsData from "../data/projectsData.json";
import Cards from "../components/Cards";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Rivah Somerville";
  }, []);
  const [page, setPage] = useState(1);
  const pageSize = 6;
  // Most recent 4 projects (assume last 4 in array)
  const recentProjects = [...projectsData].reverse();
  return (
    <div className="page-container projects-page">
      <div className="content-container">
        <div className="projects-container">
          <h1 className="main-heading">All Projects</h1>
          <div className="projects-list">
            <Cards
              projects={recentProjects}
              page={page}
              pageSize={pageSize}
              onPageChange={setPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
