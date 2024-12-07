const keepAlive = require(`./server`);
require('dotenv').config();
const secret = process.env.TOKEN;
const { AoiClient, LoadCommands } = require("aoi.js");

const client = new AoiClient({
  token: secret,
  prefix: "!",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "ca836e35f72927787f495f63d8889cc7",
  },
});

const loader = new LoadCommands(client);
loader.load(client.cmd, "./commands");

client.status({
  name: "Morimens",
  type: "Streaming",
  time: 12,
  url: "https://www.youtube.com/watch?v=1892ujwIooo",
});

keepAlive();
