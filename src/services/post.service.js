const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const postDao = require("../models/post.dao");

const createPost = async (content, userId) => {
  await postDao.createPost(content, userId);
};

const postlist = async () => {
  return await postDao.postlist();
};

module.exports = { createPost, postlist };
