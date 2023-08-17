const { AppDataSource } = require("./data-source");

const createPost = async (content, user_id) => {
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
    [content, user_id]
  );
};

const postlist = async() => {
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
        `,
    );
};


module.exports = { createPost, postlist };