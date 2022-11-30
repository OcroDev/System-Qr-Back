import mongoose from "mongoose";
import Colors from "colors";
import * as dotenv from "dotenv";

//ENVIROMENT CONSTANTS
dotenv.config();
const PORT = process.env.PORT || 4000;

//DATABASE CONNECTION
export default function databaseConnetion(app) {
  mongoose
    .connect(
      `mongodb+srv://root:${process.env.MONGO_DB_PASS}@development.gmjmloq.mongodb.net/system-qrstock?retryWrites=true&w=majority`
    )
    .then((result) => {
      console.log(Colors.bgYellow("DATABASE CONNECTION SUCCESS"));
      app.listen(PORT, () => {
        console.log(Colors.dim(`SERVER PORT LISTENING ON PORT ${PORT}`));
      });
    })
    .catch((error) => console.log(Colors.red(error)));
}
