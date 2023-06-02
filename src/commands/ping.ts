import { CommandInteraction, Client, ApplicationCommandType } from "discord.js";
import { Command } from "../command";

export const Ping: Command = {
  name: "ping",
  description: "Sends the bot's ping",
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    await interaction.followUp({
      content: `Pong! ${client.ws.ping}ms`,
      ephemeral: true,
    });
  },
};
