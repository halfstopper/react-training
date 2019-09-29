import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import RuleTitleField from "./RuleTitleField";
import RuleDescriptionField from "./RuleDescriptionField";

const RuleForm = ({ rule: { id, title, description } }) => {
  const initialValues = {
    id,
    title: title || "",
    description: description || ""
  };
  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title"> {id ? "Edit rule" : "New rule"} </h3>
      </div>
      <div className="panel-body">
        <Formik
          onSubmit={values => console.log(values)}
          initialValues={initialValues}
          render={({ errors, dirty, isSubmitting }) => (
            <Form>
              <Field name="title" component={RuleTitleField} />
              <Field name="description" component={RuleDescriptionField} />
              <button type="submit" className="btn btn-primary pull-right">
                Submit
              </button>
            </Form>
          )}
        />
      </div>
    </div>
  );
};

RuleForm.defaultProps = {
  rule: {
    title: "",
    description: ""
  }
};

RuleForm.propTypes = {
  rule: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string
  }).isRequired
};

const mapStateToProps = ({ rules }, ownProps) => {
  const id = Number(ownProps.match.params.id);
  return {
    rule: rules.find(rule => rule.id === id)
  };
};

export default connect(mapStateToProps)(RuleForm);
