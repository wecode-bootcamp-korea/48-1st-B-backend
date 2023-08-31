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
  
  const getLikeId = async (user_id, post_id) => {
    const likeId = await AppDataSource.query(
      `
      SELECT id 
      FROM likes 
      WHERE user_id = ? and post_id = ?;
      `,
      [user_id, post_id]
    );
  
    if (likeId.length > 0) {
      return JSON.stringify(likeId[0].id);
    } else {
      return null;
    }
  };
  
  const createLike = async (user_id, post_id) => {
    await AppDataSource.query(
      `
      INSERT INTO likes (
        user_id,
        post_id
      ) VALUES (
        ?,
        ?
      );
      `,
      [user_id, post_id]
    );
  };
  
  const deleteLike = async (id, user_id, post_id) => {
    await AppDataSource.query(
      `
      DELETE 
      FROM likes l 
      WHERE id = ? && user_id = ? && post_id = ?;
      `,
      [id, user_id, post_id]
    );
  };
  

module.exports = { createPost, postlist, modifyPost, getLikeId, createLike, deleteLike };
