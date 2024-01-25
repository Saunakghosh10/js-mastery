const initialState = {
    showModal: false,
    fieldConfigs: {
      Student: [],
      'Self-Employed': [],
      Business: [],
    },
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SHOW_MODAL':
        return { ...state, showModal: true };
      case 'HIDE_MODAL':
        return { ...state, showModal: false };
      case 'ADD_FIELD_CONFIG':
        const { context, type, fieldName, validationRules } = action.payload;
        return {
          ...state,
          showModal: false,
          fieldConfigs: {
            ...state.fieldConfigs,
            [context]: [
              ...state.fieldConfigs[context],
              { type, fieldName, validationRules },
            ],
          },
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  