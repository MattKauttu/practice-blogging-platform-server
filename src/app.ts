import express from "express";
import bodyParser from "body-parser";
import { BlogPostController } from "./controllers/blogPostController";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const blogPostController = new BlogPostController();
app.use("/api/blogposts", blogPostController.router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});