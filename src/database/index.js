import Sequelize from "sequelize";
//database tables

const sequelize = new Sequelize("systemqr", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;

/*mongodb connection*/
// //import mongoose from "mongoose";
// //DATABASE CONNECTION
// // export default function databaseConnetion(app) {
// //   mongoose
// //     .connect(
// //       `mongodb+srv://root:${process.env.MONGO_DB_PASS}@development.gmjmloq.mongodb.net/system-qrstock?retryWrites=true&w=majority`
// //     )
// //     .then((result) => {
// //       console.log(Colors.bgYellow("DATABASE CONNECTION SUCCESS"));
// //       app.listen(PORT, () => {
// //         console.log(Colors.dim(`SERVER PORT LISTENING ON PORT ${PORT}`));
// //       });

// //       // PRODUCT.updateMany({}, { $set: { p_location: "PAPELERIA" } }).then(
// //       //   (res) => console.log(res)
// //       // );
// //     })
// //     .catch((error) => console.log(Colors.red(error)));
// // }
