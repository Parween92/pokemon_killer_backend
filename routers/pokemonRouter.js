import express from "express";
import getRandomPokemon from "../controllers/pokemonController.js";

const router = express.Router();

router.get("/random", getRandomPokemon);

export default router;
