const requiredMessage = "شما باید حداقل چیزی در اینجا بنویسید";

const minLength = ({ value, message }) => {
  return {
    value,
    message,
  };
};

const maxLength = ({ value, message }) => {
  return {
    value,
    message,
  };
};

const minLengthMessage = (minLength = new Number()) => {
  const message = `حداقل باید ${minLength} کاراکتر استفاده کنید`;
  return message;
};
const maxLengthMessage = (maxLength = new Number()) => {
  const message = `حداکثر  ${maxLength} کاراکتر می توانید وارد کنید`;
  return message;
};

export {
  requiredMessage,
  minLengthMessage,
  maxLengthMessage,
  minLength,
  maxLength,
};
