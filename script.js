const CARDS = [
  {
    code: "B4",
    image: "./images/blueFour.png",
    value: 4,
    suit: "Numbers",
  },
  {
    code: "B3",
    image: "./images/blueThree.png",
    value: 3,
    suit: "Numbers",
  },
  {
    code: "B2",
    image: "./images/blueTwo.png",
    value: 2,
    suit: "Numbers",
  },
  {
    code: "B1",
    image: "./images/blueOne.png",
    value: 1,
    suit: "Numbers",
  },
  {
    code: "B0",
    image: "./images/blueZero.png",
    value: 0,
    suit: "Numbers",
  },

  {
    code: "BSkip",
    image: "./images/blueSkip.png",
    value: 20,
    suit: "Numbers",
  },
  {
    code: "G4",
    image: "./images/greenFour.png",
    value: 4,
    suit: "Numbers",
  },
  {
    code: "G3",
    image: "./images/greenThree.png",
    value: 3,
    suit: "Numbers",
  },
  {
    code: "G2",
    image: "./images/greenTwo.png",
    value: 2,
    suit: "Numbers",
  },
  {
    code: "G1",
    image: "./images/greenOne.png",
    value: 1,
    suit: "Numbers",
  },
  {
    code: "G0",
    image: "./images/greenZero.png",
    value: 0,
    suit: "Numbers",
  },
  {
    code: "GSkip",
    image: "./images/greenSkip.png",
    value: 20,
    suit: "Numbers",
  },
  {
    code: "RSkip",
    image: "./images/redSkip.png",
    value: 20,
    suit: "Numbers",
  },
  {
    code: "R4",
    image: "./images/redFour.png",
    value: 4,
    suit: "Numbers",
  },
  {
    code: "R3",
    image: "./images/redThree.png",
    value: 3,
    suit: "Numbers",
  },
  {
    code: "R2",
    image: "./images/redTwo.png",
    value: 2,
    suit: "Numbers",
  },
  {
    code: "R1",
    image: "./images/redOne.png",
    value: 1,
    suit: "Numbers",
  },
  {
    code: "R0",
    image: "./images/redZero.png",
    value: 0,
    suit: "Numbers",
  },
  {
    code: "Y0",
    image: "./images/yellowZero.png",
    value: 0,
    suit: "Numbers",
  },
  {
    code: "Y1",
    image: "./images/yellowOne.png",
    value: 1,
    suit: "Numbers",
  },
  {
    code: "Y2",
    image: "./images/yellowTwo.png",
    value: 2,
    suit: "Numbers",
  },
  {
    code: "Y3",
    image: "./images/yellowThree.png",
    value: 3,
    suit: "Numbers",
  },
  {
    code: "Y4",
    image: "./images/yellowFour.png",
    value: 4,
    suit: "Numbers",
  },
  {
    code: "YSkip",
    image: "./images/yellowSkip.png",
    value: 20,
    suit: "Numbers",
  },
];

function getRandom() {
  return CARDS[Math.floor(Math.random() * CARDS.length)];
}

function game() {
  let player1 = getRandom();
  const player1Img = document.createElement("img");
  player1Img.src = player1.image;
  player1Img.style.width = "30%";
  player1Img.style.marginTop = "50px";
  const playerValue = player1.value;
  document.querySelector("#deck-of-cards-player").appendChild(player1Img);
  console.log(playerValue);

  let player2 = getRandom();
  const player2Img = document.createElement("img");
  player2Img.src = player2.image;
  player2Img.style.width = "30%";
  player2Img.style.marginTop = "50px";
  const cpuValue = player2.value;
  document.querySelector("#deck-of-cards-cpu").appendChild(player2Img);
  console.log(cpuValue);

  let results = document.getElementById
  ("result")
  results.style.fontFamily = "cursive"
  
  if (playerValue > cpuValue) {
    results.innerText = "Player 1 wins";
  } else if (cpuValue > playerValue) {
    results.innerText = "Player 2 wins";
  } else {
    results.innerText = "It's a tie";
  }
}

function reset() {
  location.reload();
}

const resetBtn = document.querySelector("#reset");
const startBtn = document.querySelector("#Controller");
resetBtn.addEventListener("click", reset);
startBtn.addEventListener("click", game);
