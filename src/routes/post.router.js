const express = require("express");
const postRouter = express.Router();

const postController = require("../controllers/post.controller");
const { loginRequired } = require("../utils/auth.js");

postRouter.post("/createPost", postController.createPost);
postRouter.post("/getPostList", postController.postlist);
postRouter.put("/modifycontent", loginRequired, postController.postModify);
postRouter.post("/createLike", postController.createLike);

module.exports = { postRouter }


