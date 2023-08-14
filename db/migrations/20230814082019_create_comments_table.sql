-- migrate:up
CREATE TABLE comments (
  id INT NOT NULL AUTO_INCREMENT,
  c_content varchar(255),
  user_id INT NOT NULL,
  post_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

-- migrate:down
DROP TABLE comments;
