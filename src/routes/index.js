const express = require("express");

const { userRouter } = require("./user.router");
const { postRouter } = require("./post.router");

const routes = express.Router();
routes.use("/user", userRouter);
routes.use("/post", postRouter);
routes.use("/postmodify", postRouter);

module.exports = { routes };



