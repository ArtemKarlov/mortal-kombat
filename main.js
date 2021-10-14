const $arenas = document.querySelector('.arenas');

const player1 = {
  name: 'SCORPION',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['gun', 'knife'],
  attack: function () {
    console.log(this.name + ' Fight...');
  },
};

const player2 = {
  name: 'SUB-ZERO',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['ice', 'snowball'],
  attack: function () {
    console.log(this.name + ' Fight...');
  },
};

function createPlayer(className, player) {
  const $player = document.createElement('div');
  $player.classList.add(className);

  const $progressBar = document.createElement('div');
  $progressBar.classList.add('progressbar');

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = player.hp + '%';

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = player.name;

  const $character = document.createElement('div');
  $character.classList.add('character');

  const $playerImage = document.createElement('img');
  $playerImage.src = player.img;
  $playerImage.alt = player.name;

  $character.appendChild($playerImage);
  $progressBar.appendChild($life);
  $progressBar.appendChild($name);

  $player.appendChild($progressBar);
  $player.appendChild($character);

  $arenas.appendChild($player);
}

createPlayer('player1', player1);
createPlayer('player2', player2);
