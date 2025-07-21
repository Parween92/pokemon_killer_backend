import { z } from "zod/v4";

const pokemonSchema = z.object({
  name: z.string().min(1, "Name darf nicht leer sein").max(50, "Name zu lang"),

  sprite: z.url("Sprite muss eine gültige URL sein"),

  maxHp: z.number().min(1, "maxHp muss mindestens 1 sein"),

  type: z.string().min(1, "Type darf nicht leer sein").max(30, "Type zu lang"),

  xp: z.number().min(0, "XP darf nicht negativ sein"),

  id: z
    .number()
    .int("ID muss eine ganze Zahl sein")
    .min(0, "ID muss mindestens 1 sein"),
});

export default pokemonSchema;
