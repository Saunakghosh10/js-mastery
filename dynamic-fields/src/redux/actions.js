export const showModal = () => ({ type: 'SHOW_MODAL' });
export const hideModal = () => ({ type: 'HIDE_MODAL' });
export const addFieldConfig = (context, type, fieldName, validationRules) => ({
  type: 'ADD_FIELD_CONFIG',
  payload: { context, type, fieldName, validationRules }
});
