import { Client } from "discord.js";
import { config } from "dotenv";

config();
console.log("Starting up...");
const client = new Client({
  intents: [],
});
client.login(process.env.TOKEN);
console.log(client);
