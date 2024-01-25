import React from 'react';
import { useSelector } from 'react-redux';
import FieldInput from './FieldInput';

const DisplayFieldsInterface = () => {
  const fieldConfigs = useSelector(state => state.fieldConfigs);

  return (
    <div>
      {/* Render fields dynamically based on fieldConfigs */}
      {Object.keys(fieldConfigs).map(context => (
        <div key={context}>
          <h3>{context}</h3>
          {fieldConfigs[context].map((field, index) => (
            <FieldInput key={index} {...field} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default DisplayFieldsInterface;
