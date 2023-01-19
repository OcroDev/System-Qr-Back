import Sequelize from "sequelize";

const sequelize = new Sequelize("systemqr", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});

// const sequelize = new Sequelize("postgres", "postgres", "Ro33921335*", {
//   host: "db.oriqnytbmffklndrozrr.supabase.co",
//   dialect: "postgres",
// });

export default sequelize;
