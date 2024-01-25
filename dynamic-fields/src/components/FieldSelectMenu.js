import React, { useState } from 'react';

const FieldSelectMenu = ({ fieldName, validationRules }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [error, setError] = useState('');

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
    setError('');
  };

  const validateSelect = () => {
    if (!selectedValue.trim()) {
      setError('Please select an option');
      return false;
    }
    // Add more specific validation rules as needed

    return true;
  };

  return (
    <div>
      <label>{fieldName}</label>
      <select value={selectedValue} onChange={handleSelectChange} onBlur={() => validateSelect()}>
        {/* Add options here based on validationRules */}
      </select>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default FieldSelectMenu;
