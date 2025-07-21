import express from "express";
import chalk from "chalk";
import cors from "cors";
import mongoose from "mongoose";

import dbMongo from "./db/index.js";
import errorHandler from "./middleware/errorhandler.js";
import ErrorResponse from "./utils/ErrorResponse.js";
import leaderboardRouter from "./routers/leaderboardRouter.js";
import pokemonRouter from "./routers/pokemonRouter.js";

await dbMongo(); // DB verbinden

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

//überprüfen, ob die API läuft und die DB verbunden
app.get("/", async (req, res) => {
  const dbResponse = await mongoose.connection.db.admin().ping();
  if (dbResponse.ok !== 1) throw new ErrorResponse("DB is not connected", 503);
  res.json({ message: "Running", dbResponse });
});

app.use("/api/leaderboard", leaderboardRouter);
app.use("/api/pokemon", pokemonRouter);

//Fallback für ungültige oder nicht existierende Routen
app.use(/.*/, (req, res, next) => {
  next(new ErrorResponse(`Check route. You used ${req.originalUrl}`, 404));
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(chalk.bgGreen(` PokemGame API listening on port ${port} `));
});
