import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { hideModal } from '../redux/actions';

const FieldModal = ({ show, onClose, onSave }) => {
  const [type, setType] = useState("Text Input");
  const [fieldName, setFieldName] = useState("");
  const [validationRules, setValidationRules] = useState("");

  const dispatch = useDispatch();

  const handleSave = () => {
    onSave(type, fieldName, validationRules);
    onClose();
  };

  return (
    <div style={modalStyles}>
      <h2>Add New Field</h2>
      <div>
        <label>Type:</label>
        <select onChange={(e) => setType(e.target.value)}>
          <option value="Text Input">Text Input</option>
          <option value="Select Menu">Select Menu</option>
          <option value="Date Picker">Date Picker</option>
        </select>
      </div>
      <div>
        <label>Field Name:</label>
        <input type="text" placeholder="Field Name" onChange={(e) => setFieldName(e.target.value)} />
      </div>
      <div>
        <label>Validation Rules:</label>
        <input type="text" placeholder="Validation Rules" onChange={(e) => setValidationRules(e.target.value)} />
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={() => dispatch(hideModal())}>Cancel</button>
    </div>
  );
};

const modalStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

export default FieldModal;
