// SETUP FOR COMMANDS
// Todo : Switch script in Package.JSON to run this index.js once everytime new command is edited

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const token = process.env['token']
const client_id = process.env['client_id']
const guild_id = process.env['guild_id']

const commands = [{
  name: 'unbanall',
  description: 'Unbans all banned users. PERMISSIONS : Only Nephy.'
  }]; 

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(client_id, guild_id),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();