import Leaderboard from "../models/Leaderboard.js";
import leaderboardSchema from "../zod-schemas/leaderboard.schema.js";

const getLeaderboard = async (req, res) => {
  const scores = await Leaderboard.find().sort({ score: -1 }); //sortiert nach score absteigend
  res.json({ data: scores });
};

const createScore = async (req, res) => {
  const validatedData = leaderboardSchema.parse(req.body);
  //Validiert die Daten mit leaderboardSchema (Zod-Schema) → Prüft, ob alles passt (z. B. Typen, Format)

  const newScore = await Leaderboard.create(validatedData); //Wenn validiert, wird ein neuer Eintrag in der DB angelegt
  res.status(201).json({ data: newScore });
};

export { getLeaderboard, createScore };
