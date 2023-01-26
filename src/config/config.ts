export const config = () => ({
  app: {
    host: process.env.HOST,
    port: parseInt(process.env.APP_PORT),
  },
  database: {
    host: process.env.DB_HOST,
    driver: process.env.DB_DRIVER || 5432,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
});
