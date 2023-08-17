const postService = require("../services/post.service");

const createPost = async (req, res) => {
  try {
    const { content } = req.body;
    const user = req.user;
    const userId = user.id;

    await postService.createPost(content, userId);

    res.status(201).end();
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
};

const postlist = async (req, res) => {
  try {
    const postlist = await postService.postlist();
    res.status(201).json(postlist);
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const deletePost = async (req, res) => {
  try { 
    const { postId, userId } = req.body;

    const result = await deletePost(postId, userId);

    res.status(result.statusCode).json({ message : err.message })
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};
module.exports = { createPost, postlist, deletePost };
