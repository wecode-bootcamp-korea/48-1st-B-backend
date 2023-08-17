const express = require("express");
const postRouter = express.Router();

const postController = require("../controllers/post.controller");

postRouter.post("/createPost", postController.createPost);
postRouter.post("/getPostList", postController.postlist);
postRouter.delete("/post", postController.deletePost);

module.exports = { postRouter };
