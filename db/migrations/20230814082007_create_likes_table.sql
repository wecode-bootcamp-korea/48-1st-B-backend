-- migrate:up
CREATE TABLE likes (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  post_id INT NOT NULL, PRIMARY KEY (id)
);

-- migrate:down

