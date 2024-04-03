import mongoose from "mongoose";
import express from "express";
import cors from "cors";

import { playerRouter } from "./routes/playerRoutes";
import { Player } from "./model/player";

const app = express();

let corsOptions = {
  origin: ["http://localhost:3000"],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api", playerRouter);

const port = 8080;

const uri =
  "mongodb+srv://nocopyrightgamingmusic123:AoY6o3ojlLCTF5Jw@cluster0.ioyftrc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri)
  .then(() => {
    console.log("[mongodb]: Successfully connected!");
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((e) => console.log(`Error: ${e}`));

// run().catch((err) => console.log(err));

// async function run() {
//   // 4. Connect to MongoDB

//   const player = new Player({
//     name: "Bill",
//     email: "bill@initech.com",
//     avatar: "https://i.imgur.com/dM7Thhn.png",
//   });
//   await player.save();

//   console.log(player.name); // 'bill@initech.com'
// }
