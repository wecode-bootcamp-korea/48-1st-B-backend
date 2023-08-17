const express = require("express");
const { loginRequired } = require('../utils/auth');
const postRouter = express.Router();

const postController = require("../controllers/post.controller");


postRouter.post("/createPost", postController.createPost);
postRouter.post("/getPostList",loginRequired, postController.postlist);

module.exports = { postRouter };
