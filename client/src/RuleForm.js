import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import RuleTitleField from "./RuleTitleField";
import RuleDescriptionField from "./RuleDescriptionField";
import isObjectEmpty from "./utils/isObjectEmpty";
import { addRule, updateRule } from "./actions/rules-actions";

const RuleForm = ({
  rule: { id, title, description },
  updateRule,
  addRule,
  history
}) => {
  const initialValues = {
    id,
    title: title || "",
    description: description || ""
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .max(50, "The title must be shorter than 50 characters")
      .required("Title is required"),
    description: Yup.string()
      .min(5, "The description must be longer than 5 characters")
      .max(100, "The description must be shorter than 100 characters")
  });

  const handleSubmit = values => {
    const submitActionCreator = id ? updateRule : addRule;
    submitActionCreator(values, history);
  };

  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title"> {id ? "Edit rule" : "New rule"} </h3>
      </div>
      <div className="panel-body">
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
          render={({ errors, dirty, isSubmitting }) => (
            <Form>
              <Field name="title" component={RuleTitleField} />
              <Field name="description" component={RuleDescriptionField} />
              <button
                type="submit"
                className="btn btn-primary pull-right"
                disabled={isSubmitting || !isObjectEmpty(errors) || !dirty}
              >
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

const mapDispatchToProps = {
  addRule,
  updateRule
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RuleForm);
