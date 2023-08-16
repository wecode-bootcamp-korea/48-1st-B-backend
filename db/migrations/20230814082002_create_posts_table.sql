-- migrate:up
CREATE TABLE posts (
  id INT NOT NULL AUTO_INCREMENT,
  content varchar(255),
  user_id integer NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

-- migrate:down
drop table posts;
