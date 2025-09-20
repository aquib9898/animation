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

  let flappyBirdTextImg= new Image();
  flappyBirdTextImg.src="./flappyBirdLogo.png";

  let gameOverImg=new Image();
  gameOverImg.src="./flappy-gameover.png";

  let bird={
    x:50,
    y:boardHeight/2,
    width:40,
    height:30
  }

  let velocityY=0;
  let velocityX=-2;
  let gravity = 0.5;
  let birdY=boardHeight/2;
  let pipeWidth=50;
  let pipeGap=200;
  let Pipearray=[];
  let pipeIntervalId;

  function createPipe(){
    let maxTopPipeHeight=boardHeight-pipeGap-50;
    let topPipeHeight=Math.floor(Math.random()*maxTopPipeHeight);
    let bottomPipeHeight=boardHeight-topPipeHeight-pipeGap;

    let topPipe={
        x:boardWidth,
        y:boardHeight,
        width:pipeWidth,
        height:topPipeHeight,
        passed:false
    };


    let bottomPipe={
        x:boardWidth,
        y:topPipe+pipeGap,
        width:pipeWidth,
        height:bottomPipeHeight,
        passed:false

    };
    Pipearray.pish(topPipe,bottomPipe);
  }


  window.onload = function(){
    board=document.getElementById("board");
    board.height=boardHeight;
    board.width=boardWidth;
    context=board.getContext("2d");

    birdImg=new Image();
    birdImg.src="./flappybird.png";

  }
    
  
