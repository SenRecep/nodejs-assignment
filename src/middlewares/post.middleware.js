const postMiddleware = (req, res, next) => {
  console.log("Post iseği için istek gönderildi");
  next();
};
export default postMiddleware;
