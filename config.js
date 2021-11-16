const env = process.env;

const config = {
  db: { 
    host: env.MYSQL_HOST,
    user: env.MYSQL_USER,
    password: env.MYSQL_PASSWORD,
    database: env.MYSQL_DATABASE
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;