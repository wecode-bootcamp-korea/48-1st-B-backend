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

const getLikeId = async (userId, postId) => {
  const getLikeId = await postDao.getLikeId(userId, postId);

  if (getLikeId == null) {
    await createLike(userId, postId);
    return true;
  } else {
    await deleteLike(getLikeId, userId, postId);
    return false;
  }
};

const createLike = async (userId, postId) => {
  await postDao.createLike(userId, postId);
};

const deleteLike = async (getLikeId, userId, postId) => {
  const id = getLikeId;
  await postDao.deleteLike(id, userId, postId);
};

module.exports = { createPost, postlist, postModify, getLikeId, createLike, deleteLike };

