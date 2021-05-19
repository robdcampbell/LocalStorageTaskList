CREATE DATABASE jwt_crash;

-- set extension: uuid-ossp in database
-- cmd:  create extension if not exists "uuid-ossp";
-- UUID extension needs to be added for the UUID generate V4 to work properly 
CREATE TABLE users(
  user_id uuid PRIMARY KEY DEFAULT
  uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL, 
  user_email VARCHAR(255) NOT NULL, 
  user_password VARCHAR(255) NOT NULL
);

-- Insert fake users

INSERT INTO users(user_name, user_email, user_password)
VALUES('johndoe', 'john@gmail.com', '123456');