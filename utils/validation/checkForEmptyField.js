function checkForEmptyField(value) {
  if (!value || value.length === 0) {
    return "Should not be empty";
  }
  return false;
}

export default checkForEmptyField;
