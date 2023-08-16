-- migrate:up
ALTER TABLE users RENAME COLUMN phoneNumber TO phone_number;
ALTER TABLE users RENAME COLUMN nickName TO nick_name;
ALTER TABLE users RENAME COLUMN profileImage TO profile_image;

ALTER TABLE comments RENAME COLUMN c_content TO content;
ALTER TABLE comments ADD FOREIGN KEY(user_id) REFERENCES users(id);
ALTER TABLE comments ADD FOREIGN KEY(post_id) REFERENCES posts(id);

ALTER TABLE likes ADD UNIQUE `likes_unique_idx_key`(`user_id`, `post_id`);
ALTER TABLE likes ADD FOREIGN KEY(user_id) REFERENCES users(id);
ALTER TABLE likes ADD FOREIGN KEY(post_id) REFERENCES posts(id);

ALTER TABLE posts ADD FOREIGN KEY(user_id) REFERENCES users(id);
-- migrate:down
du