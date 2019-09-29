import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { doLike, doDislike } from "./actions/likes-actions";

const LikeBtn = ({ pType, pId, rules, doLike, doDislike }) => {
  const isUp = () => pType === "up";
  const increment = () => {
    if (isUp()) doLike(pId);
    else doDislike(pId);
  };
  const title = isUp() ? "+1" : "-1";
  const rule = rules.find(rule => rule.id === pId);
  const counter = pType === "up" ? rule.likes : rule.dislikes;

  return (
    <button className="btn btn-default" title={title} onClick={increment}>
      {counter} <i className={`glyphicon glyphicon-thumbs-${pType}`}> </i>
    </button>
  );
};

LikeBtn.defaultProps = {
  counter: 0
};

LikeBtn.propTypes = {
  pType: PropTypes.oneOf(["up", "down"]).isRequired,
  pId: PropTypes.number
};

const mapStateToProps = ({ rules }) => ({
  rules
});

const mapDispatchToProps = {
  doLike,
  doDislike
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeBtn);
