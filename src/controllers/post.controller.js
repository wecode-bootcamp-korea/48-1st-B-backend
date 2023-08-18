const postService = require("../services/post.service");

const createPost = async (req, res) => {
  try {
    const { content } = req.body;
    const user = req.user;
    const userId = "1"; 

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

const postModify = async (req, res) => {
  try {
    const {content, id} = req.body;
  
    await postService.postModify(
    content,
    id
    );
  
    res.status(201).end();
    } catch (err) {
    res.status(err.statusCode || 400).json ({ message: err.message});
    }
  };
  
module.exports = { createPost, postlist, postModify };
