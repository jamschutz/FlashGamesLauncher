const gamesLookup = {
    'SpecOps': 'politics/40095_wot202c',
    'EmoGame': 'politics/EmoGame',
    'AntiWarGame': 'politics/antiwar_game/_container',
    'UltimateFlashSonic': 'clones/151706_ultimate_sonic202c',
    'FlashPortal': 'clones/portal2'
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