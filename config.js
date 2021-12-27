export const dbInfo = {
  dbhost: process.env.PGHOST,
  dbname: process.env.PGDATABASE,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  dbport: process.env.PGPORT,
};

export const emailInfo = {
  email_address: process.env.EMAIL,
  email_password: process.env.EMAIL_PASSWORD,
};
