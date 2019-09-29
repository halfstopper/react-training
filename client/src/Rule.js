import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LikeBtn from "./LikeBtn";
import "./Rule.css";

const Rule = ({ pRule }) => {
  const { id, title, description, tags } = pRule;
  const newTags = tags.map(tag => (
    <span key={tag} className="badge">
      {tag}
    </span>
  ));
  const [folded, setFolded] = useState(!description);
  const toggleFolded = () => setFolded(!folded);
  const cssFolded = folded ? "up" : "down";
  return (
    <div className="panel panel-primary">
      <div className="panel-heading" role="presentation" onClick={toggleFolded}>
        {title}
        <i
          className={`pull-right glyphicon glyphicon-chevron-${cssFolded}`}
        ></i>
      </div>
      <div className={`panel-body ${folded ? "hidden" : ""}`}>
        <p>{description}</p>
      </div>
      <div className="panel-footer">
        <div className="btn-toolbar">
          {newTags}
          <div className="btn-group btn-group-xs pull-right">
            <Link to={`/edit/${id}`} className="btn btn-primary" title="Update">
              <i className="glyphicon glyphicon-pencil"></i>
            </Link>
          </div>
          <div className="btn-group btn-group-xs pull-right">
            <LikeBtn pType="up" pId={id} />
            <LikeBtn pType="down" pId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

Rule.defaultProps = {
  pRule: {
    title: "",
    description: "",
    tags: []
  }
};

Rule.propTypes = {
  pRule: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default Rule;
