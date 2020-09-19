const order2 = {
    variety: 'green',
    teaName: 'silver needle',
    origin: 'taiwan',
    price: 12.99,
    hasCaffeine: true,
    quantity: 4
};

function getTotal({quantity: qty = 1, price}){
    return qty * price;
}

console.log(getTotal(order2));

const longJumpResults = ['Tam', 'Jess', 'Violet'];
const swimMeetResults = ['Japan', 'France', 'China'];

function awardMedals([gold, silver, bronze]) {
    return {gold, silver, bronze};
}

console.log(awardMedals(longJumpResults));
// {gold: "Tam", silver: "Jess", bronze: "Violet"}