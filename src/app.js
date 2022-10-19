import * as dotenv from "dotenv";
import express, { json } from "express";
import helloRoute from "./modules/hello/routers/hello.router.js";
import generalMiddleware from "./middlewares/general.middleware.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(json());
app.use(generalMiddleware);
app.use("/api/hello", helloRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`url: http://localhost:${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
