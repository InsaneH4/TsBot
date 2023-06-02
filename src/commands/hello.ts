import { CommandInteraction, Client, ApplicationCommandType } from "discord.js";
import { Command } from "../command";

export const Hello: Command = {
  name: "hello",
  description: "Says hello to the user",
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    await interaction.followUp({ content: "Hello!" });
  },
};
