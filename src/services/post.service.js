const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const postDao = require("../models/post.dao");

const createPost = async (content, user_id) => {
  await postDao.createPost(content, user_id);
};


const postlist = async () => {
  return await postDao.postlist();
};

const deletePost = async (postId, userId) => {
  if(posts.user_id !== userId) {
    return { statusCode: 403 }
  }

  return await postDao.deletePost();
}



module.exports = { createPost, postlist, deletePost };
