const env = process.env;

export = {
  DB: {
    /* don't expose password or any sensitive info, done only for demo */
    host: env.MASTER_DB_HOST || "localhost",
    user: env.MASTER_DB_USER || "root",
    password: env.MASTER_DB_PASSWORD || "MYSQL100",
    database: env.MASTER_DB_NAME || "job-portal",
    timezone: "utc",
  },
  JwtToken: {
    secretKey: env.JWT_TOKEN_SECRET_KEY || "test",
    expiry: env.JWT_TOKEN_EXPIRY || "1d",
  },

  listPerPage: env.LIST_PER_PAGE || 10,
};
