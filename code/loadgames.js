const gamesLookup = {
    // politics
    'SpecOps': 'politics/40095_wot202c',
    'EmoGame': 'politics/EmoGame',
    'AntiWarGame': 'politics/antiwar_game/_container',
    
    // clones
    'UltimateFlashSonic': 'clones/151706_ultimate_sonic202c',
    'FlashPortal': 'clones/portal2',
    
    // cannon
    'NanacaCrash': 'cannon/',
    'DropKickTheFaint': 'cannon/',
    'KittenCannon': 'cannon/',
    
    // edgelord
    'SkullKid': 'edgelord/',
    'thegame': 'edgelord/',
    'DivineIntervention': 'edgelord/',
    
    // puzzle
    'IWishIWereTheMoon': 'puzzle/',
    'Samorost': 'puzzle/',
    'GrowCube': 'puzzle/',
    'Cursor10': 'puzzle/',

    // animation
    'XiaoXiao2': 'animation/',
    'XiaoXiao4': 'animation/',
    'FlyGuy': 'animation/',
    'DungeonEscape': 'animation/',

    // orisinal
    'TheLittePigs': 'orisinal/',
    'WinterBells': 'orisinal/',
    'PocketfulOfStars': 'orisinal/',

    // gamer
    'BallRevamped2': 'gamer/',
    'Motherload': 'gamer/',
    'LittleRocketman': 'gamer/',

    // dressup
    'CreateARide': 'dressup/'
}


window.RufflePlayer = window.RufflePlayer || {};
window.addEventListener("load", (event) => {
    const ruffle = window.RufflePlayer.newest();
    const player = ruffle.createPlayer();
    const container = document.getElementById("container");
    var game = window.location.hash.substring(1); // lop off the leading '#'
    container.appendChild(player);

    console.log(`loading game ${game}`)

    var pathToGame = gamesLookup[game];

    console.log(`path to game: ${pathToGame}`)
    player.load(`games/${pathToGame}.swf`);
});