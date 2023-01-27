import Sequelize from "sequelize";

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  }
);

// const sequelize = new Sequelize("postgres", "postgres", "Ro33921335*", {
//   host: "db.oriqnytbmffklndrozrr.supabase.co",
//   dialect: "postgres",
// });

export default sequelize;
