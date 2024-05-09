// Breadcrumb.jsx

// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ paths }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex flex-row items-center justify-center space-x-3 text-[3.2vw]  lg:text-2xl font-medium text-blue-900">
      {paths.map((path, index) => (
          <li key={index} className={`breadcrumb-item ${index === paths.length - 1 ? "active" : ""}`}>
            {typeof path.title === "string" ? (
              index === paths.length - 1 ? (
                path.title
              ) : (
                <Link to={path.url}>{path.title}</Link>
              )
            ) : (
              path.title
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  paths: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        url: PropTypes.string.isRequired,
      }),
    ])
  ).isRequired,
};

export default Breadcrumb;