const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const postDao = require("../models/post.dao");

const createPost = async (content, user_id) => {
  await postDao.createPost(content, user_id);
};


const postlist = async () => {
  return await postDao.postlist();
};

module.exports = { createPost, postlist };
