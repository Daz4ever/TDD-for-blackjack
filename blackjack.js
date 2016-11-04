function Card(point, suit) {
  this.point = point;
  this.suit = suit;
}


Card.prototype.getImageUrl = function(){
  var name = '';
  if(this.point === 11) {
    name = 'jack';
  }
  else if (this.point === 12) {
    name = 'queen';
  }
  else if(this.point === 13) {
    name = 'king';
  }
  else if(this.point === 1) {
    name = 'ace';
  }
  else {name = (this.point);}
  return 'images/' + name + '_of_' + this.suit + '.png';
};


function Hand() {

  this.hand =[];
}
// var myCard = new Card(11, 'hearts');
// var myHand = new Hand();
Hand.prototype.addCard = function(card) {

  return this.hand.push(card);
};

// myHand.addCard(myCard);

Hand.prototype.calculatePoints = function () {
  return this.hand.reduce(function add(sum, card) {
    var point = card.point;
    if (point > 10) {
      point = 10;
    }
    var testSum = sum + point;
    if (point === 1 && testSum < 11) {
     point = 11;
    }
    return sum + point;
  }, 0);
};


function Deck(n) {
  this.deck = [];
  this.usedCards = [];
  for(var j = 0; j < n; j++ ) {
    for (var i = 1; i < 14; i++ ) {
      this.deck.push(new Card(i,'spades'));
      this.deck.push(new Card(i,'hearts'));
      this.deck.push(new Card(i,'diamonds'));
      this.deck.push(new Card(i,'clubs'));
    }
  }
}

Deck.prototype.drawCard = function() {
  var card = this.deck.pop();
  this.usedCards.push(card);
  return card;
};

Deck.prototype.shuffle = function() {
  var currentIndex = this.deck.length;
  var temporaryValue;
  var randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = this.deck[currentIndex];
    this.deck[currentIndex] = this.deck[randomIndex];
    this.deck[randomIndex] = temporaryValue;
  }

  return this.deck;
};

Deck.prototype.numCardsLeft = function() {
  return this.deck.length;
};

/////-------------------------------

var usedCards = [];
var myDeck = new Deck(6);
myDeck.shuffle();
playerHand = new Hand();
dealerHand = new Hand();
