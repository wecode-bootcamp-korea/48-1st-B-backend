const express = require("express");

const { postRouter } = require("./post.router");

const routes = express.Router();
routes.use("/post", postRouter);
module.exports = { routes };
