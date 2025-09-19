  let boardWidth=360;
  let boardHeight=640;
  let backgroundImg=new Image();
  backgroundImg.src="./flappybirdbg.png";
  let inputLocked= false;

  document.addEventListener("keydown",handleKeyDown);


  let GAME_STATE = {
    MENU: "menu",
    PLAYING: "playing",
    GAME_OVER: "gameOver"
  };

  let currentState=GAME_STATE.MENU;

  let playButton={
    x:boardWidth/2-115.2/2,
    y:boardHeight/2-64/2,
    width:115,
    height:64
  }

  let logo={
    x:boardWidth/2-300/2,
    y:boardHeight/4,
    width:300,
    height:100
  }