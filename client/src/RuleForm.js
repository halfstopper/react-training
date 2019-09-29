import React from "react";
import PropTypes from "prop-types";
import RuleTitleField from "./RuleTitleField";
import RuleDescriptionField from "./RuleDescriptionField";

const RuleForm = ({ rule: { id, title, description } }) => {
  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title"> {id ? "Edit rule" : "New rule"} </h3>
      </div>
      <div className="panel-body">
        <form>
          <RuleTitleField title={title} />
          <RuleDescriptionField description={description} />
          <button type="submit" className="btn btn-primary pull-right">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

RuleForm.defaultProps = {
  rule: {}
};

RuleForm.propTypes = {
  rule: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string
  }).isRequired
};

export default RuleForm;
