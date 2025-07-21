import { Schema, model } from "mongoose";

const pokemonSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  sprite: {
    type: String,
    required: true,
  },

  maxHp: {
    type: Number,
    required: true,
    min: 1,
  },

  type: {
    type: String,
    required: true,
    trim: true,
  },

  xp: {
    type: Number,
    required: true,
    min: 0,
  },

  id: { type: Number, required: true, unique: true },
});

const Pokemon = model("Pokemon", pokemonSchema);
export default Pokemon;
