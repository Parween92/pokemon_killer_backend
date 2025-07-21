import chalk from "chalk";
import mongoose from "mongoose";

export default async function dbMongo() {
  try {
    const mongo = await mongoose.connect(process.env.Mongo_URI, {
      dbName: "PokemonGame",
    });
    console.log(chalk.cyan(` DB connected to ${mongo.connection.name}`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

// wenn eine Fehler in der COnsole angegeben, dann das Programm wird mit exit(1) beendet (1 = Fehlerstatus)
