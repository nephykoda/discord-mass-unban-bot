// ===== KEEPS THE DISCORD BOT ALIVE ======

const express = require("express")
const server = express()

server.all("/", (req,res)=>{
  res.send("Bot is running!")
})

// Go to https://uptimerobot.com/ to register a free Uptime Robot to keep sending in HTTP command to keep the Bot alive
// Repeatedly send HTTPS this URL "https://Discord-Unban-Bot.nephydecode.repl.co"

function keepAlive(){
  server.listen(3000, () => {
    console.log("Server is ready.")
  })
}

module.exports = keepAlive
