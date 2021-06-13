
$(document).bind('DOMContentLoaded', initilizegame );
  function initilizegame(){
  //card options
  let cardArray = [
    {
      name: 'milan',
      img: 'images/milan.png'
    },
    {
      name: 'real',
      img: 'images/real.png'
    },
    {
      name: 'barca',
      img: 'images/barca.png'
    },
    {
      name: 'manutd',
      img: 'images/manutd.png'
    },
    {
      name: 'liverpool',
      img: 'images/liverpool.png'
    },
    {
      name: 'bayern',
      img: 'images/bayern.png'
    },
    {
      name: 'dortmund',
      img: 'images/dortmund.png'
    },
    {
      name: 'chelsea',
      img: 'images/chelsea.png'
    },
    {
      name: 'juve',
      img: 'images/juve.png'
    },
    {
      name: 'inter',
      img: 'images/inter.png'
    },
    {
      name: 'arsenal',
      img: 'images/arsenal.png'
    },
    {
      name: 'atletico',
      img: 'images/atletico.png'
    },
    {
        name: 'napoli',
        img: 'images/napoli.png'
      },
      {
        name: 'mancity',
        img: 'images/mancity.png'
      },
      {
        name: 'psg',
        img: 'images/psg.png'
      },
      {
        name: 'milan',
        img: 'images/milan.png'
      },
      {
        name: 'real',
        img: 'images/real.png'
      },
      {
        name: 'barca',
        img: 'images/barca.png'
      },
      {
        name: 'manutd',
        img: 'images/manutd.png'
      },
      {
        name: 'liverpool',
        img: 'images/liverpool.png'
      },
      {
        name: 'bayern',
        img: 'images/bayern.png'
      },
      {
        name: 'dortmund',
        img: 'images/dortmund.png'
      },
      {
        name: 'chelsea',
        img: 'images/chelsea.png'
      },
      {
        name: 'juve',
        img: 'images/juve.png'
      },
      {
        name: 'inter',
        img: 'images/inter.png'
      },
      {
        name: 'arsenal',
        img: 'images/arsenal.png'
      },
      {
        name: 'atletico',
        img: 'images/atletico.png'
      },
      {
          name: 'napoli',
          img: 'images/napoli.png'
        },
        {
          name: 'mancity',
          img: 'images/mancity.png'
        },
        {
          name: 'psg',
          img: 'images/psg.png'
        }
  ]
  cardArray.sort(() => 0.5 - Math.random())
  let grid = document.querySelector('.grid')
  let resultDisplay = document.querySelector('#Matches')
  let movesDisplay=document.querySelector('#Moves')
  var cardsChosen = []
  var cardsChosenId = []
  var cardswon=0;
   var amountmoves = 0;

 
     var new_game = function () {
          grid.innerHTML = "";
          resultDisplay.textContent = 0;
          movesDisplay.textContent = 0;
          initilizegame();
      }
    var loadPage = function () {
        $("#resetgame").click(new_game);
     }

  //create your board
     function createBoard() {
          for (let i = 0; i < cardArray.length; i++) {
              var card = document.createElement('img')
              card.setAttribute('src', 'images/champions.png')
              card.setAttribute('data-id', i)
              card.addEventListener('click', flipCard)
              grid.appendChild(card)
          }
      }

  //check for matches
  function checkForMatch() {
    var cards = $('img')
    var optionOneId = cardsChosenId[0]
    var optionTwoId = cardsChosenId[1]
    amountmoves++;

      if (optionOneId == optionTwoId) {
          
        cards[optionOneId].setAttribute('src', 'images/champions.png')
          cards[optionTwoId].setAttribute('src', 'images/champions.png')
          alert('You have clicked the same image!')
      
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
          alert('You found a match')
          cards[optionOneId].removeEventListener('click', flipCard)
         cards[optionTwoId].removeEventListener('click', flipCard)
      cardswon++;
    }
    else {      
      cards[optionOneId].setAttribute('src', 'images/champions.png')
      cards[optionTwoId].setAttribute('src', 'images/champions.png')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardswon;
    movesDisplay.textContent=amountmoves;
    if  (cardswon === cardArray.length/2) {
      alert('WIN!');
      grid.innerHTML= "";
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
        if(cardsChosenId[0]!=cardsChosenId[1]){
     

      setTimeout(checkForMatch, 500)
        }
        else{
            cardsChosen.length=1;
            cardsChosenId.length=1;
        }
    }
  }

  createBoard()
    $("document").ready(loadPage);
}
