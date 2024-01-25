import React, { useState } from 'react';

const FieldDatePicker = ({ fieldName, validationRules }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [error, setError] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setError('');
  };

  const validateDate = () => {
    if (!selectedDate.trim()) {
      setError('Date is required');
      return false;
    }
    // Add more specific validation rules as needed

    return true;
  };

  return (
    <div>
      <label>{fieldName}</label>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        onBlur={() => validateDate()}
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default FieldDatePicker;
