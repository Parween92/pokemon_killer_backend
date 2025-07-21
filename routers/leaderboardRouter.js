import express from "express";
import {
  getLeaderboard,
  createScore,
} from "../controllers/leaderboardController.js";

const leaderboardRouter = express.Router();

leaderboardRouter.get("/", getLeaderboard);
leaderboardRouter.post("/", createScore);

export default leaderboardRouter;
