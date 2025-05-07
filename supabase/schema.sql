-- Table to store daily user count
CREATE TABLE IF NOT EXISTS daily_count (
  id SERIAL PRIMARY KEY,
  count INTEGER NOT NULL DEFAULT 0,
  date DATE NOT NULL UNIQUE
);

-- Table to store weekly user count
CREATE TABLE IF NOT EXISTS weekly_count (
  id SERIAL PRIMARY KEY,
  count INTEGER NOT NULL DEFAULT 0,
  start_date DATE NOT NULL UNIQUE
);

-- Table to store users in the waiting list
CREATE TABLE IF NOT EXISTS waiting_list (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  request_time TIMESTAMP WITHOUT TIME ZONE DEFAULT (NOW() AT TIME ZONE 'utc')
);
