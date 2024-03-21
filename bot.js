// ===== BOT COMMANDS BODY ====

const keepAlive = require("./server")

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
// const client = new Client({ intents: "GUILDS" });
const token = process.env['token']
const guildId = process.env['guild_id']

let bot = {client};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const guild = client.guilds.cache.get(guildId)
});

client.on('interactionCreate', async interaction => {
  console.log(interaction.user.id);
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'unbanall') {
    console.log(interaction.user.id);
    // Change this ID to your Discord ID to only allow yourself to run the unbanall command
    if(interaction.user.id!=='398128279715840002'){
      await interaction.reply("You are not Nephy!");
      return;
    }
    
    list = 0;
    banned = 0;
    const guild = client.guilds.cache.get(guildId);

    guild.bans.fetch({ cache: false }).then(
      banned => {
        let list = [];
        banned.map(ban=> {
          list.push(ban.user.id);
          // ==== TO UNBAN ====
          guild.bans.remove(ban.user.id)
          console.log('Unbanned ' + String(ban.user.id) + ', ' + String(ban.user.tag));
                   }
                  )
        console.log(list);
        
      }
    ).catch(console.error);
    await interaction.reply(`Unbanned all users`);
  }
});

keepAlive();
client.login(token);

