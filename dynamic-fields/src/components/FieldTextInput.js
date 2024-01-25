import React, { useState } from 'react';

const FieldTextInput = ({ fieldName, validationRules }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setError('');
  };
  

  const validateInput = () => {
    if (!inputValue.trim()) {
      setError('Field is required');
      return false;
    }
    // Add more specific validation rules as needed

    return true;
  };

  return (
    <div>
      <label>{fieldName}</label>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={() => validateInput()}
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default FieldTextInput;
