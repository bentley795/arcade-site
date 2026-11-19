// 1. Strict Hardcoded JSON of 50 Open-Source GitHub-Hosted Games
const gamesJSON = `[
  { "title": "2048", "genre": "Puzzle", "thumbnail": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/512px-2048_logo.svg.png", "embedUrl": "https://gabrielecirulli.github.io/2048/" },
  { "title": "Hextris", "genre": "Arcade", "thumbnail": "https://raw.githubusercontent.com/Hextris/hextris/gh-pages/images/twitter-opengraph.png", "embedUrl": "https://hextris.github.io/hextris/" },
  { "title": "Astray (3D Maze)", "genre": "3D Puzzle", "thumbnail": "https://raw.githubusercontent.com/wwwtyro/Astray/master/screenshot.png", "embedUrl": "https://wwwtyro.github.io/Astray/" },
  { "title": "Clumsy Bird", "genre": "Arcade", "thumbnail": "https://raw.githubusercontent.com/ellisonleao/clumsy-bird/master/data/img/clumsy.png", "embedUrl": "https://ellisonleao.github.io/clumsy-bird/" },
  { "title": "Tower Building", "genre": "Arcade", "thumbnail": "https://raw.githubusercontent.com/iamkun/tower_game/master/assets/icon.png", "embedUrl": "https://iamkun.github.io/tower_game/" },
  { "title": "Canvas Tetris", "genre": "Puzzle", "thumbnail": "", "embedUrl": "https://dionyziz.github.io/canvas-tetris/" },
  { "title": "HTML5 Pac-Man", "genre": "Arcade", "thumbnail": "", "embedUrl": "https://masonicgit.github.io/pacman/" },
  { "title": "2048 Cupcakes", "genre": "Puzzle", "thumbnail": "", "embedUrl": "https://0x0800.github.io/2048-CUPCAKES/" },
  { "title": "Doge 2048", "genre": "Puzzle", "thumbnail": "", "embedUrl": "https://doge2048.github.io/" },
  { "title": "9007199254740992", "genre": "Puzzle", "thumbnail": "", "embedUrl": "https://www.csie.ntu.edu.tw/~b01902112/9007199254740992/" },
  { "title": "Alien Invasion", "genre": "Shooter", "thumbnail": "", "embedUrl": "https://cykod.github.io/AlienInvasion/" },
  { "title": "Breakout HTML5", "genre": "Arcade", "thumbnail": "", "embedUrl": "https://jakesgordon.github.io/javascript-breakout/" },
  { "title": "JavaScript Pong", "genre": "Sports", "thumbnail": "", "embedUrl": "https://jakesgordon.github.io/javascript-pong/" },
  { "title": "JavaScript Gauntlet", "genre": "Adventure", "thumbnail": "", "embedUrl": "https://jakesgordon.github.io/javascript-gauntlet/" },
  { "title": "JavaScript Racer", "genre": "Racing", "thumbnail": "", "embedUrl": "https://jakesgordon.github.io/javascript-racer/" },
  { "title": "JavaScript Snaker", "genre": "Arcade", "thumbnail": "", "embedUrl": "https://jakesgordon.github.io/javascript-snaker/" },
  { "title": "JavaScript Tetris", "genre": "Puzzle", "thumbnail": "", "embedUrl": "https://jakesgordon.github.io/javascript-tetris/" },
  { "title": "Boulder Dash", "genre": "Arcade", "thumbnail": "", "embedUrl": "https://jakesgordon.github.io/javascript-boulderdash/" },
  { "title": "Tiny Platformer", "genre": "Platformer", "thumbnail": "", "embedUrl": "https://jakesgordon.github.io/javascript-tiny-platformer/" },
  { "title": "Tower Platformer", "genre": "Platformer", "thumbnail": "", "embedUrl": "https://jakesgordon.github.io/javascript-tower-platformer/" },
  { "title": "Alien Splatter", "genre": "Shooter", "thumbnail": "", "embedUrl": "https://cykod.github.io/AlienSplatter/" },
  { "title": "Block Rain", "genre": "Puzzle", "thumbnail": "", "embedUrl": "https://aerolab.github.io/blockrain.js/" },
  { "title": "PolyBranch (3D Dodge)", "genre": "3D Arcade", "thumbnail": "", "embedUrl": "https://gbuckingham89.github.io/PolyBranch/" },
  { "title": "HexGL (3D Futuracer)", "genre": "3D Racing", "thumbnail": "", "embedUrl": "https://bkcore.github.io/HexGL/" },
  { "title": "Trigger Rally", "genre": "3D Racing", "thumbnail": "", "embedUrl": "https://jareiko.github.io/triggerrally/" },
  { "title": "Hyperspace Garbage Collector", "genre": "Shooter", "thumbnail": "", "embedUrl": "https://razh.github.io/hyperspace-garbage-collector/" },
  { "title": "Space Huggers", "genre": "Platformer", "thumbnail": "", "embedUrl": "https://killedbyapixel.github.io/SpaceHuggers/" },
  { "title": "Bounce Back", "genre": "Adventure", "thumbnail": "", "embedUrl": "https://killedbyapixel.github.io/BounceBack/" },
  { "title": "Bogus", "genre": "Puzzle", "thumbnail": "", "embedUrl": "https://killedbyapixel.github.io/Bogus/" },
  { "title": "13th Floor", "genre": "Arcade", "thumbnail": "", "embedUrl": "https://killedbyapixel.github.io/13thFloor/" },
  { "title": "Underrun", "genre": "Shooter", "thumbnail": "", "embedUrl": "https://phoboslab.org/underrun/" },
  { "title": "Xibalba", "genre": "3D Shooter", "thumbnail": "", "embedUrl": "https://phoboslab.org/xibalba/" },
  { "title": "Biolab Disaster", "genre": "Platformer", "thumbnail": "", "embedUrl": "https://phoboslab.org/biolab/" },
  { "title": "Z-Type (Typing Shooter)", "genre": "Arcade", "thumbnail": "", "embedUrl": "https://zty.pe/" },
  { "title": "Digger HTML5", "genre": "Arcade", "thumbnail": "", "embedUrl": "https://lutzroeder.github.io/digger/" },
  { "title": "Minesweeper JS", "genre": "Puzzle", "thumbnail": "", "embedUrl": "https://nickarocho.github.io/minesweeper/" },
  { "title": "Solitaire JS", "genre": "Card", "thumbnail": "", "embedUrl": "https://bryanbraun.github.io/solitaire/" },
  { "title": "Connect Four", "genre": "Board", "thumbnail": "", "embedUrl": "https://bryanbraun.github.io/connect-four/" },
  { "title": "Chessboard JS", "genre": "Board", "thumbnail": "", "embedUrl": "https://jhlywa.github.io/chess.js/" },
  { "title": "Sudoku JS", "genre": "Puzzle", "thumbnail": "", "embedUrl": "https://robatron.github.io/sudoku.js/" },
  { "title": "Flappy 2048", "genre": "Arcade", "thumbnail": "", "embedUrl": "https://hczhcz.github.io/Flappy-2048/" },
  { "title": "2048 Tetris", "genre": "Puzzle", "thumbnail": "", "embedUrl": "https://prat0318.github.io/2048-tetris/" },
  { "title": "Racing 2048", "genre": "Puzzle", "thumbnail": "", "embedUrl": "https://hczhcz.github.io/Racing-2048/" },
  { "title": "2048 3D", "genre": "3D Puzzle", "thumbnail": "", "embedUrl": "https://heron.github.io/2048-3D/" },
  { "title": "Pacman Canvas", "genre": "Arcade", "thumbnail": "", "embedUrl": "https://platzhersh.github.io/pacman-canvas/" },
  { "title": "Space Invaders JS", "genre": "Arcade", "thumbnail": "", "embedUrl": "https://dwmkerr.github.io/spaceinvaders/" },
  { "title": "Asteroids Reloaded", "genre": "Shooter", "thumbnail": "", "embedUrl": "https://dmcinnes.github.io/HTML5-Asteroids/" },
  { "title": "Duck Hunt JS", "genre": "Shooter", "thumbnail": "", "embedUrl": "https://matt-surabian.github.io/DuckHunt-JS/" },
  { "title": "Custom Tetris", "genre": "Puzzle", "thumbnail": "", "embedUrl": "https://chvin.github.io/react-tetris/" },
  { "title": "Klocki Puzzle", "genre": "Puzzle", "thumbnail": "", "embedUrl": "https://lukasz-m.github.io/klocki/" }
]`;

// 2. Parse the JSON string into a usable JavaScript array
const gamesDatabase = JSON.parse(gamesJSON);

// 3. Connect to HTML elements
const gameGrid = document.getElementById("game-grid");
const searchInput = document.getElementById("search-input");
const playerModal = document.getElementById("player-modal");
const gameFrame = document.getElementById("game-frame");
const activeGameTitle = document.getElementById("active-game-title");
const closeBtn = document.getElementById("close-btn");

// Helper: Generates a clean SVG card cover for games without an external thumbnail URL
function getFallbackCover(title, genre) {
  const safeTitle = title.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1e293b"/>
        <stop offset="100%" stop-color="#0284c7"/>
      </linearGradient>
    </defs>
    <rect width="400" height="240" fill="url(#g)"/>
    <text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="24" font-weight="bold">${safeTitle}</text>
    <text x="50%" y="66%" dominant-baseline="middle" text-anchor="middle" fill="#bae6fd" font-family="system-ui, sans-serif" font-size="14">${genre.toUpperCase()}</text>
  </svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

// 4. Render game cards
function renderGames(list) {
  gameGrid.innerHTML = "";
  list.forEach((game) => {
    const card = document.createElement("div");
    card.className = "game-card";
    const imgSrc = game.thumbnail ? game.thumbnail : getFallbackCover(game.title, game.genre);

    card.innerHTML = `
      <img src="${imgSrc}" alt="${game.title}" />
      <div class="game-info">
        <h3>${game.title}</h3>
        <span class="badge">${game.genre}</span>
      </div>
    `;

    card.querySelector("img").addEventListener("error", function () {
      this.src = getFallbackCover(game.title, game.genre);
    });

    card.addEventListener("click", () => {
      activeGameTitle.textContent = game.title;
      gameFrame.src = game.embedUrl;
      playerModal.classList.remove("hidden");
    });

    gameGrid.appendChild(card);
  });
}

// 5. Close player modal
closeBtn.addEventListener("click", () => {
  playerModal.classList.add("hidden");
  gameFrame.src = "";
});

// 6. Search filter
searchInput.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = gamesDatabase.filter(
    (g) => g.title.toLowerCase().includes(term) || g.genre.toLowerCase().includes(term)
  );
  renderGames(filtered);
});

// 7. Start the site
renderGames(gamesDatabase);
