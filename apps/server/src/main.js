import "dotenv/config";
import express from "express";
import { httpExceptionHandler } from "./middlewares/http-exception-handler";
import postsController from "./posts/posts.controller";
import authController from './auth/auth.controller';
import productsController from './products/products.controller';

import cors from "cors";
import { corsOptions } from "./constants/cors-options";

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    message: "Hello",
  });
});

app.use("/posts", postsController);
app.use('/products', productsController);
app.use('/auth', authController);

app.all("*", (req, res) => {
  return res.status(404).json({ error: "Not Found" });
});

app.use(httpExceptionHandler);

app.listen(8000, () => {
  console.log("App is running at port: http://localhost:8000");
});
