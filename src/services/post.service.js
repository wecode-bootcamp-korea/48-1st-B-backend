const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const postDao = require("../models/post.dao");

const createPost = async (content, userId) => {
  await postDao.createPost(content, userId);
};

const postlist = async () => {
  return await postDao.postlist();
};


const postModify = async (content, id) => {
  await postDao.modifyPost(content, id);
};


module.exports = { createPost, postlist, postModify };

