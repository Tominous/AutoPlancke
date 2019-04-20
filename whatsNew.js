TriggerRegister.registerCommand("planckeUpdates").setCommandName("plancke")
function planckeUpdates(update) {
  // Variables
  var version = "1.0";
  if (update === "update")  {
    new Message(
ChatLib.chat(ChatLib.getCenteredText("&6&lWhats New?")),
ChatLib.getChatBreak("-"),
ChatLib.chat("&c&lVersion:" + version),
ChatLib.chat("\n"),
ChatLib.chat("&7Made names tabable ONLY if you type in the command with OUT a "/" for example: bw Hek(Tab to complete IGN) "),
ChatLib.chat("&8Yet this wouldn't work: /bw Hek(Click tab to complete)"),
ChatLib.chat("&9Added /gamestats <IGN> &7Will show all the users in that game, You could click on the names and view there stats"),
ChatLib.chat("&8If you don't enter an ign it will open your game stats."),
ChatLib.chat("&9Added /lagg <IGN>, &7A different way to see stats, Not on plancke (Personally I perfer this as it is cleaner yet doesn't support all games.)")
).chat();
return;

  }
}
