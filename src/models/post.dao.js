const { AppDataSource } = require("./data-source");

const createPost = async (content, userId) => {
  await AppDataSource.query(
    `
    INSERT INTO posts (
      content,
      user_id
    ) VALUES (
      ?,
      ?
    );
    `,
    [content, userId]
  );
};

const postlist = async () => {
  return await AppDataSource.query(
    `
        Select u.id,
        u.nick_name,
        p.content,
        p.created_at,
        p.updated_at,
        p.user_id
        From users u, posts p 
        Where u.id = p.user_id 
        Order by p.created_at desc;
        `
  );
};

const modifyPost = async (
  content,
  id
  ) => {
    await AppDataSource.query(
      `
      UPDATE posts 
       SET content = ?
       WHERE id= ? 
      ;
      `,
      [content, id]
    );
  };
  

module.exports = { createPost, postlist, modifyPost };
