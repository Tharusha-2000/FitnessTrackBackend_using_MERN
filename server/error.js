// eslint-disable-next-line import/prefer-default-export
exports.createError = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;
  return err;
};
