import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showModal, hideModal, addFieldConfig } from '../redux/actions';
import FieldModal from './FieldModal';

const AddFieldsInterface = () => {
  const dispatch = useDispatch();
  const contexts = ["Student", "Self-Employed", "Business"];
  const fieldConfigs = useSelector(state => state.fieldConfigs);
  const [selectedContext, setSelectedContext] = useState("");

  const handleShowModal = () => {
    dispatch(showModal());
  };

  const handleCloseModal = () => {
    dispatch(hideModal());
  };

  const handleSaveField = (context, type, fieldName, validationRules) => {
    if (fieldConfigs[context].length < 4) {
      dispatch(addFieldConfig(context, type, fieldName, validationRules));
      handleCloseModal();
    }
  };

  return (
    <div className="AddFieldsInterface" style={interfaceStyles}>
      <select onChange={(e) => setSelectedContext(e.target.value)}>
        <option value="">Select Context</option>
        {contexts.map(context => (
          <option key={context}>{context}</option>
        ))}
      </select>
      <button onClick={handleShowModal}>Add New Field</button>
      <FieldModal
        show={fieldConfigs[selectedContext] && fieldConfigs[selectedContext].length < 4}
        onClose={handleCloseModal}
        onSave={(type, fieldName, validationRules) =>
          handleSaveField(selectedContext, type, fieldName, validationRules)
        }
      />
    </div>
  );
};

const interfaceStyles = {
  marginBottom: '20px',
};

export default AddFieldsInterface;
