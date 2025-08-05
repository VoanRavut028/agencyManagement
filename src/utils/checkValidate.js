export function checkValidation(
  validateItem,
  getFieldItem,
  fieldItemErr,
  fieldDOM,
  statusDOM
) {
  if (!validateItem.test(getFieldItem) && getFieldItem !== "") {
    fieldItemErr.innerHTML = `<i class="ri-error-warning-line"></i> Invalid!`;
    statusDOM = false;
    fieldDOM.classList.add("error-form");
    fieldDOM.classList.remove("valid-form");
  } else if (getFieldItem === "") {
    statusDOM = false;
    fieldItemErr.innerHTML = `<i class="ri-error-warning-line"></i> This field is required.`;
    fieldDOM.classList.add("error-form");
  } else {
    fieldItemErr.innerHTML = "";
    fieldDOM.classList.remove("error-form");
    fieldDOM.classList.add("valid-form");
  }
  return statusDOM;
}

export function checkDate(getFieldItem, fieldItemErr, fieldDOM, statusDOM) {
  if (getFieldItem === isNaN && getFieldItem !== "") {
    fieldItemErr.innerHTML = inValidError;
    statusDOM = false;
    fieldDOM.classList.add("error-form");
    fieldDOM.classList.remove("valid-form");
  } else if (getStartAgreement === "") {
    fieldItemErr.innerHTML = emptyRequired;
    statusDOM = false;
    fieldDOM.classList.add("error-form");
  } else {
    fieldItemErr.innerHTML = "";
    fieldDOM.classList.remove("error-form");
    fieldDOM.classList.add("valid-form");
  }
}
