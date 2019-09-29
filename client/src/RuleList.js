import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Rule from "./Rule";
import { loadRules } from "./actions/rules-actions";

const RuleList = ({ rules, loadRules }) => {
  useEffect(() => {
    loadRules();
  }, []);

  const newRules = rules.map(rule => <Rule key={rule.id} rule={rule} />);

  return <Fragment>{newRules}</Fragment>;
};

Rule.defaultProps = {
  rules: []
};

RuleList.propTypes = {
  rules: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  ).isRequired
};

const mapStateToProps = ({ rules }) => ({
  rules
});

const mapDispatchToProps = {
  loadRules
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RuleList);
