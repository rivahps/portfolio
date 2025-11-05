import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

/**
 * Cards component
 * @param {Array} projects - Array of project objects
 * @param {boolean} horizontal - If true, renders horizontally scrollable row
 * @param {number} pageSize - Number of cards per page (for grid mode)
 * @param {number} page - Current page (for grid mode, 1-based)
 * @param {function} onPageChange - Callback for page change (for grid mode)
 */

const Cards = ({
  projects = [],
  horizontal = false,
  pageSize = 6,
  page = 1,
  onPageChange,
  renderCard,
}) => {
  // Pagination logic for grid mode
  const totalPages = Math.ceil(projects.length / pageSize);
  const paginatedProjects = horizontal
    ? projects
    : projects.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className={`cards${horizontal ? " cards--horizontal" : ""}`}>
      <div className="cards__container">
        <div
          className={`cards__wrapper${
            horizontal ? " cards__wrapper--horizontal" : ""
          }`}
        >
          <div
            className={`cards__items${
              horizontal ? " cards__items--horizontal" : ""
            }`}
          >
            {paginatedProjects.map((project, idx) =>
              renderCard && horizontal && project.viewMore ? (
                renderCard(project)
              ) : (
                <CardItem
                  key={project.id || idx}
                  text={project.title}
                  description={project.description}
                  path={`/projects/${project.id}`}
                  src={project.image}
                  alt={project.alt}
                  tags={project.tags}
                />
              )
            )}
          </div>
        </div>
        {/* Pagination controls for grid mode */}
        {!horizontal && totalPages > 1 && (
          <div className="cards__pagination">
            <div className="cards__pagination-buttons">
              <button
                className="btn"
                onClick={() => onPageChange && onPageChange(page - 1)}
                disabled={page === 1}
              >
                Previous
              </button>
              <button
                className="btn"
                onClick={() => onPageChange && onPageChange(page + 1)}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
            <span className="cards__pagination-info">
              Page {page} of {totalPages}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
