var game;
window.onload = function () {
  game = new Phaser.Game(640, 360, Phaser.AUTO, "phaser_game"); 
  game.state.add("Boot", Boot); 
  game.state.add("Preloader", Preloader); 
  game.state.add("Game", Game); 
  game.state.add("MainMenu", MainMenu);
  game.state.add("GameOver", GameOver); 
  game.state.start("Boot");
};