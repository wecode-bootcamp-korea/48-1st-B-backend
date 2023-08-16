const { AppDataSource } = require("./data-source");

const createUser = async (
  email,
  password,
  nickname,
  profileImage,
  phoneNumber,
  birtday
) => {
  await AppDataSource.query(
    `
    INSERT INTO users (
      email,
      password,
      nickname, 
      profileImage,
      phoneNumber,
      birthday
    ) VALUES (
      ?,
      ?,
      ?,
      ?,
      ?,
      ?
    );
    `,
    [email, password, nickname, profileImage, phoneNumber, birtday]
  );
};

const getUserByEmail = async (email) => {
  const [user] = await AppDataSource.query(
    `
      SELECT *
      FROM users u
      WHERE u.email = ?
    `,
    [email]
  );

  return user;
};

module.exports = { createUser, getUserByEmail };
