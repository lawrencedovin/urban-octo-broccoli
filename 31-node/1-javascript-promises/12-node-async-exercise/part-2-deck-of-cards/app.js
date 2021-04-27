// const deckUrl = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
// let deckPromise = axios.get(deckUrl);
// deckPromise.then(res => {
//     let {data} = res;
//     let {deck_id} = data;
//     console.log(deck_id);
// });
// deckPromise.catch(err => console.log(err));

// let deckId = 'b0tydo1nzfst';
// let deckUrl = `https://deckofcardsapi.com/api/deck/${deckId}/`;

// const drawCard = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;

// let drawCardPromise = axios.get(drawCard);
// drawCardPromise.then(res => {
//     let {data} = res;
//     console.log(data);
//     let {cards} = data;
//     let cardImage = cards[0].image;
//     let suit = cards[0].suit;
//     let value = cards[0].value;
//     console.log(cardImage);
//     console.log(`${value} of ${suit}`);
//     let {remaining} = data;
//     console.log(remaining);
// })
// drawCardPromise.catch(err => console.log(err));

$(function() {
    let baseURL = 'https://deckofcardsapi.com/api/deck';
  
    // 1.
    $.getJSON(`${baseURL}/new/draw/`).then(data => {
      let { suit, value } = data.cards[0];
      console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    });
  
    // 2.
    let firstCard = null;
    $.getJSON(`${baseURL}/new/draw/`)
      .then(data => {
        firstCard = data.cards[0];
        let deckId = data.deck_id;
        return $.getJSON(`${baseURL}/${deckId}/draw/`);
      })
      .then(data => {
        let secondCard = data.cards[0];
        [firstCard, secondCard].forEach(function(card) {
          console.log(
            `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
          );
        });
      });
  
    // 3.
    let deckId = null;
    let $btn = $('button');
    let $cardArea = $('#card-area');
  
    $.getJSON(`${baseURL}/new/shuffle/`).then(data => {
      deckId = data.deck_id;
      $btn.show();
    });
  
    $btn.on('click', function() {
      $.getJSON(`${baseURL}/${deckId}/draw/`).then(data => {
        let cardSrc = data.cards[0].image;
        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;
        $cardArea.append(
          $('<img>', {
            src: cardSrc,
            css: {
              transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
            }
          })
        );
        if (data.remaining === 0) $btn.remove();
      });
    });
  });