const gamesLookup = {
    // politics - launcher
    'SpecOps': 'politics/40095_wot202c',
    'EmoGame': 'politics/EmoGame',
    'AntiWarGame': 'politics/antiwar_game/_container',
    
    // clones - launcher
    'UltimateFlashSonic': 'clones/151706_ultimate_sonic202c',
    'FlashPortal': 'clones/portal2',
    
    // cannon - launcher
    'NanacaCrash': 'cannon/nanaca-crash_v110',
    'DropKickTheFaint': 'cannon/dropkick/dropkickthefaint',
    'KittenCannon': 'cannon/kittencannon',
    
    // edgelord
    'SkullKid': 'edgelord/63747_skullkid202c',
    'thegame': 'edgelord/467574_THe_game_Maxgames',
    'DivineIntervention': 'edgelord/1055',
    
    // puzzle
    'IWishIWereTheMoon': 'puzzle/moonwish2',
    'Samorost': 'puzzle/samorost/main',
    'GrowCube': 'puzzle/grow_cube_v2',
    'Cursor10': 'puzzle/cursor10',

    // animation - launcher
    'XiaoXiao2': 'animation/17306_fight2',
    'XiaoXiao4': 'animation/25718_Xiaoxiao_4',
    'FlyGuy': 'animation/fly guy',
    'DungeonEscape': 'animation/dungeon',

    // orisinal
    'TheseLittePigs': 'orisinal/00pig',
    'WinterBells': 'orisinal/00bells',
    'PocketfulOfStars': 'orisinal/00stars',

    // gamer
    'BallRevamped2': 'gamer/ball-revamped-2-metaphysik',
    'Motherload': 'gamer/8khsgfbehb',
    'LittleRocketman': 'gamer/jump',

    // dressup
    'CreateARide': 'dressup/createaride'
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