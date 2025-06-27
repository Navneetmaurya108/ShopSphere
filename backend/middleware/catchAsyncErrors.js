// Wraps async route handlers to catch errors and pass them to Express error middleware

module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};
