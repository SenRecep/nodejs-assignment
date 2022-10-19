const generalMiddleware = (req, res, next) => {
  console.log("Yeni bir istek geldi");
  next();
};
export default generalMiddleware;
