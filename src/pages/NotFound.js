import React, { useEffect } from "react";
import "./NotFound.css";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 Not Found | Rivah Somerville";
  }, []);
  return (
    <div className="page-container notfound-page">
      <div className="content-container">
        <div className="error-container">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for does not exist or has been moved.</p>
          <a className="btn" href="/">
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
