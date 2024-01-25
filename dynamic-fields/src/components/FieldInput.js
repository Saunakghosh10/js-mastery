import React from 'react';
import FieldTextInput from './FieldTextInput';
import FieldSelectMenu from './FieldSelectMenu';
import FieldDatePicker from './FieldDatePicker';

const FieldInput = ({ type, fieldName, validationRules }) => {
  switch (type) {
    case "Text Input":
      return <FieldTextInput fieldName={fieldName} validationRules={validationRules} />;
    case "Select Menu":
      return <FieldSelectMenu fieldName={fieldName} validationRules={validationRules} />;
    case "Date Picker":
      return <FieldDatePicker fieldName={fieldName} validationRules={validationRules} />;
    default:
      return null;
  }
};

export default FieldInput;
