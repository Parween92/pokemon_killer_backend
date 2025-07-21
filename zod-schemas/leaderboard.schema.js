import { z } from "zod/v4";

const leaderboardSchema = z.object({
  username: z
    .string()
    .min(1, "Username darf nicht leer sein")
    .max(30, "Username darf maximal 30 Zeichen lang sein"),

  score: z
    .number()
    .min(0, "Score darf nicht negativ sein")
    .max(100000, "Score ist zu hoch"),

  anzahl: z.number().min(0, "Anzahl darf nicht negativ sein"),

  date: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Datum muss ein gültiger ISO-Datumsstring sein",
    })
    .transform((val) => new Date(val)),
});

export default leaderboardSchema;

// .refine((val) : Prüft, ob der String ein gültiges Datum ist.
// Date.parse(val) versucht, den String in ein Datum zu parsen.
//isNaN(...) prüft, ob das Ergebnis keine gültige Zahl ist.
//
// wenn das Datum gültig ist, ist die Prüfung erfolgreich.
// .transform(...)→ Wandelt den gültigen String um in ein echtes Date-Objekt:
