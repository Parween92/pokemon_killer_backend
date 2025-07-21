import { Schema, model } from "mongoose";

const leaderboardSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  score: {
    type: Number,
    required: true,
    min: 0, // Score soll nicht negativ sein
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  anzahl: {
  type: Number,
  required: true,
  min: 0,
},
});

const Leaderboard = model("Leaderboard", leaderboardSchema);
export default Leaderboard;
