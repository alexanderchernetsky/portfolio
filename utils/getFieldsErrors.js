function getFieldsErrors(errorObject) {
  return Object.entries(errorObject?.response?.data ?? {});
}

export default getFieldsErrors;
