// Stores user commands (accessible via trigger word set in config.js)
const config = require("./config");
exports.commands = {
    "help": {
        "display_names": ["help"],
        "pretty_name": "Help",
        "short_description": "Get help",
        "description": "Get more information about a command, or open quick help",
        "syntax": "help (command)",
        "user_input": false,
        "regex": /help(.*)/i,
        "experimental": false
    },
    "kick": {
        "display_names": ["kick"],
        "pretty_name": "Kick",
        "short_description": "Kick member",
        "description": "Kicks a given member from the chat",
        "syntax": "kick {member}",
        "user_input": true,
        "regex": "kick",
        "experimental": false
    },
    "xkcd": {
        "display_names": ["xkcd", "xkcd search"],
        "pretty_name": "xkcd",
        "short_description": "Links xkcd",
        "description": "Outputs the numbered xkcd or search result (or a random one if none was specified)",
        "syntax": "xkcd ({comic number}|search {search query})",
        "user_input": false,
        "regex": /xkcd(?: (\d+|search (.+)))?/i,
        "experimental": false
    },
    "addsearch": {
        "display_names": ["add", "search"],
        "pretty_name": "Add/search",
        "short_description": "Add/search user",
        "description": "Searches for the given user and either outputs the best match (for searching) or adds it to the chat (for adding)",
        "syntax": "(add|search) {user}",
        "user_input": false,
        "regex": /(add|search) (.*)/i,
        "experimental": false
    },
    "order66": {
        "display_names": ["execute order 66", "order 66"],
        "pretty_name": "Order 66",
        "short_description": "Execute group temporarily",
        "description": `Every single group member, including your Socialpath Yiyi Kuang, is now an enemy of the group chat (for ${config.order66Time} seconds)`,
        "syntax": "execute order 66",
        "user_input": false,
        "regex": /execute order 66/i,
        "experimental": false
    },
    "resetcolor": {
        "display_names": ["reset color"],
        "pretty_name": "Reset color",
        "short_description": "Reset color",
        "description": "Resets the group colors",
        "syntax": "reset color(s)",
        "user_input": false,
        "regex": /reset color(?:s)?/i,
        "experimental": false
    },
    "setcolor": {
        "display_names": ["set color"],
        "pretty_name": "Set color",
        "short_description": "Set chat color",
        "description": "Sets the color to the specified hex value and outputs previous color",
        "syntax": "set color(s) (to) #{six-digit hex color}",
        "user_input": false,
        "regex": /set color(?:s)? (?:to )?(#(?:[a-f]|\d){6})/i,
        "experimental": false
    },
    "hitlights": {
        "display_names": ["hit the lights"],
        "pretty_name": "Hit the lights",
        "short_description": "Random chat colors",
        "description": "Changes the group colors to random colors in quick succession",
        "syntax": "hit the lights",
        "user_input": false,
        "regex": /hit the lights/i,
        "experimental": false
    },
    "resetnick": {
        "display_names": ["reset nickname"],
        "pretty_name": "Reset nickname",
        "short_description": "Reset nickname",
        "description": "Clears the nickname for the given member",
        "syntax": "reset (nick)name {member}",
        "user_input": true,
        "regex": "reset (?:nick)?name",
        "experimental": false
    },
    "setnick": {
        "display_names": ["set nickname"],
        "pretty_name": "Set nickname",
        "short_description": "Set nickname",
        "description": "Sets the given nickname for the given member",
        "syntax": "set (nick)name {member} {nickname}",
        "user_input": true,
        "regex": "set (?:nick)?name",
        "experimental": false
    },
    "wakeup": {
        "display_names": ["wake up"],
        "pretty_name": "Wake up",
        "short_description": "Message user repeatedly",
        "description": `Sends ${config.wakeUpTimes} messages to the given member`,
        "syntax": "wake up {member}",
        "user_input": true,
        "regex": "wake up",
        "experimental": false
    },
    "randmess": {
        "display_names": ["random message"],
        "pretty_name": "Random message",
        "short_description": "Get random message",
        "description": "Retrieves a random message from the recent history of the group",
        "syntax": "random message",
        "user_input": false,
        "regex": /random message/i,
        "experimental": true
    },
    "alive": {
        "display_names": ["alive", "alive?"],
        "pretty_name": "Alive",
        "short_description": "Is bot up?",
        "description": "Tests whether the bot is running",
        "syntax": "alive(?)",
        "user_input": false,
        "regex": /alive(?:\?)?/i,
        "experimental": false
    },
    "resetemoji": {
        "display_names": ["reset emoji"],
        "pretty_name": "Reset emoji",
        "short_description": "Reset emoji",
        "description": "Resets the emoji to the group default",
        "syntax": "reset emoji",
        "user_input": false,
        "regex": /reset emoji/i,
        "experimental": false
    },
    "setemoji": {
        "display_names": ["set emoji"],
        "pretty_name": "Set emoji",
        "short_description": "Set chat emoji",
        "description": "Sets the emoji to the specified Unicode value",
        "syntax": "set emoji (to) #{emoji}",
        "user_input": false,
        "regex": /set emoji (?:to )?([\uD83C-\uDBFF\uDC00-\uDFFF])/iu, // Match emoji w/ Unicode modifier
        "experimental": false
    },
    "echo": {
        "display_names": ["echo", "quote"],
        "pretty_name": "Echo/quote",
        "short_description": "Repeat/quote statement",
        "description": "Echoes or quotes the provided statement",
        "syntax": "(echo|quote) ${statement}",
        "user_input": false,
        "regex": /(echo|quote) (.*)/i,
        "experimental": false
    }
};