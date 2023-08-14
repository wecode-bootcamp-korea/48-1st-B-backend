-- migrate:up
CREATE TABLE users (
  id INT PRIMARY KEY NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  birthday date,
  phoneNumber varchar(255),
  nickName varchar(255) DEFAULT 'Name',
  profileImage varchar(255) DEFAULT 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFLQXUPXBkvRFJvv6H9AioeIedXgS3MWR9A&usqp=CAU',
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- migrate:down

