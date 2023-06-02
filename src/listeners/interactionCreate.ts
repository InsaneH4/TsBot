import { CommandInteraction, Client, Interaction } from "discord.js";
import { Commands } from "../commands";

async function handleSlashCommand(
  client: Client,
  interaction: CommandInteraction
) {
  const slashCommand = Commands.find(
    (cmd) => cmd.name === interaction.commandName
  );
  if (!slashCommand) {
    interaction.followUp({ content: "An error occurred", ephemeral: true });
    return;
  }
  await interaction.deferReply();
  slashCommand.run(client, interaction);
}

export default function (client: Client) {
  client.on("interactionCreate", async (interaction: Interaction) => {
    if (interaction.isCommand() || interaction.isContextMenuCommand()) {
      await handleSlashCommand(client, interaction);
    }
  });
}
