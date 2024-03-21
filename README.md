# Discord Unban Bot

![](/assets/script-running-discord-window.gif)

## Overview
This is a simpler Discord Bot designed to assist in unbanning all users from Discord server. As discord lacks a built-in function or API endpoint for mass unbanning, this bot was developed to iteratively unban all users from the server.

## How To Use

1. Fork this project in [Replit](https://replit.com/@NephyDeCode/discord-unban-bot)

2. Create an `.env` file & add your Discord bot token:
    ```
    DISCORD_TOKEN=your_bot_token_here
    ```

3. In `bot.js`, lines 25 - 28, replace the Discord User ID with your own to only allow yourself to run this command.
    ```javascript
        if(interaction.user.id!=='398128279715840002'){
            await interaction.reply("You are not Nephy!");
            return;
        }
    ```

4. Run the Replit project. The bot will not be online and ready to use.

5. In your Discord server, invite the bot.

6. Use the command `unban-all` to activate the bot & begin the process of unbanning all users.

* In your Replit console, you should see all the users being unbanned! 😎

    ![](/assets/script-running-replit-console.gif)

## Motivation

Motivation for creating this bot was to create a simple "script" to unban all banned users. With a surge in user activity during the peak of NFT communities in 2022, automated banning bots were often quickly (& usually without much research) employed to manage the influx of users & combat spam. However, some of these bots occasionally banned many legitimate users that had similar usernames. 

Hence, this bot feature was requested by NFT communities to rectify & unban all users quickly & effectively to migrate to a more suitable banning bot.

---

🍻 *Happy unbanning (safely)!* 