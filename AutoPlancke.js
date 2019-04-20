// plancke command
TriggerRegister.registerCommand("hypixelPlancke").setCommandName("plancke");
function hypixelPlancke(name, game) {
  // Variables
  var version = "1.0";
  var generalStats = "";
  // no name or game supplied
  if (name == undefined && game == undefined) {
    ChatLib.chat("&f&l[&r&eAutoPlancke&f&l] &7AutoPlancke module made by &aHeknon&7.");
    ChatLib.chat("&3Commands:                               &7(Version: " + version + ")");
    ChatLib.chat("&3/plancke <NAME> <GAME> &7The main command to view player stats.");
    ChatLib.chat("&3/plancke shortcuts &7Shortcuts to /plancke <name> <game>");
    ChatLib.chat("&3/plancke update &7Tells you whats new!");
    ChatLib.chat("&3/gamestats <NAME> &7Shows you all the players in the game, You could click there names and see there stats.")
    ChatLib.chat("&3/lagg <NAME> &7A different website then plancke (In MY opinion this webite is easier to see stats from.)")

    // return to break out of function
    return;
  }
switch (game.toLowerCase()) {
    case "bb":
    case "BuildBattle":
        game = "BuildBattle";
        break;
    case "arcade":
        game = "Arcade";
        break;
    case "bw":
    case "bedwar":
    case "bedwars":
        game = "BedWars";
        break;
     case "bsg":
     case "blitzsurvivalgames":
     case "hg":
     case "hungergames":
        game= "BSG";
        break;
    case "cac":
    case "copsandcrims":
    case "mcgo":
        game = "CaC";
        break;
    case "cw":
    case "crazywall":
    case "crazywalls":
    case "truecombat":
        game = "CrazyWalls";
        break;
    case "mw":
    case "megawall":
    case "megawalls":
    case "walls3":
        game = "MW";
        break;
    case "mm":
    case "murdermystery":
        game = "MurderMystery";
        break;
    case "sc":
    case "skyclash":
        game = "SkyClash";
        break;
    case "sw":
    case "skywar":
    case "skywars":
        game = "SkyWars";
        break;
    case "ss":
    case "sc":
    case "supersmash":
    case "smashheroes":
    case "smashhero":
        game = "SmashHeroes";
        break;
    case "suhc":
    case "speeduhc":
        game = "SpeedUHC";
        break;
    case "tntgame":
    case "tntgames":
    case "tg":
        game = "TNTGames";
        break;
    case "uhc":
        game = "UHC";
        break;
    case "wl":
    case "warlord":
    case "warlords":
        game = "Warlords";
        break;
    case "arena":
    case "arenabrawl":
        game = "Arena";
        break;
    case "pb":
    case "paintball":
        game = "Paintball";
        break;
    case "quake":
        game = "Quake";
        break;
    case "tkr":
    case "turbokartracers":
    case "turbokart":
    case "turbokartracer":
    case "gingerbread":
    case "gb":
        game = "TKR";
        break;
    case "vampirez":
        game = "VampireZ";
        break;
    case "wall":
    case "walls":
        game = "Walls";
        break;
    case "general":
        game = generalStats;
        break;
    default:
        game = undefined;
        return;
}

  // URL Handler
  var link = "http://plancke.io/hypixel/player/stats/" + name;
  if (game != undefined) {link += "#" + game;}
  print(java.awt.Desktop.getDesktop().browse(new java.net.URI(link)));
  event.setCanceled(true);
  ChatLib.chat("&aOpening &b" + link);
}
TriggerRegister.registerCommand("gameSessionStats").setCommandName("gamestats");
function gameSessionStats(name) {
    var playername = Player.getName();
  if(name === undefined) {
    ChatLib.chat("&9/gamestats <name>")
    ChatLib.chat("&cBy not entering a name you opened your own gamestats.")
    var link1 = "http://thelagg.com/hypixel/session/" + playername + "/";
    print(java.awt.Desktop.getDesktop().browse(new java.net.URI(link1)));
    event.setCanceled(true);
    ChatLib.chat("&aOpening &b" + link);
  }
  else {
    var link2 = "http://thelagg.com/hypixel/session/" + name + "/";
    print(java.awt.Desktop.getDesktop().browse(new java.net.URI(link2)));
    event.setCanceled(true);
    ChatLib.chat("&aOpening &b" + link);
  }
}
TriggerRegister.registerCommand("laggStats").setCommandName("lagg");
function laggStats(name) {
  if(name === undefined) {
    ChatLib.chat("&9/lagg <name>")
  }
  else {
    var link3 = "http://thelagg.com/hypixel/player/" + name;
    print(java.awt.Desktop.getDesktop().browse(new java.net.URI(link3)));
    event.setCanceled(true);
    ChatLib.chat("&aOpening &b" + link);
  }
}
