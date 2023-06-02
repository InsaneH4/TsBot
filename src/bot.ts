import { Client, ClientOptions } from "discord.js";
import { config } from "dotenv";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";

config(); //Initialize dotenv
console.log("Starting up...");
const client = new Client({
  intents: [],
});
ready(client);
interactionCreate(client);
client.login(process.env.TOKEN);
