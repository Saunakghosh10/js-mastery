import React from 'react';
import AddFieldsInterface from './components/AddFieldsInterface';
import DisplayFieldsInterface from './components/DisplayFieldsInterface';
import FieldModal from './components/FieldModal';
import './App.css';

const App = () => {
  return (
    <div>
      <AddFieldsInterface />
      <DisplayFieldsInterface />
      <FieldModal />
    </div>
  );
};

export default App;
