import { Client } from "discord.js";
import { Commands } from "../commands";

export default function (client: Client) {
  client.on("ready", async () => {
    if (!client.user || !client.application) {
      throw new Error("Error starting up");
    }
    await client.application.commands.set(Commands);
    console.log(`${client.user.username} is online!`);
  });
}
