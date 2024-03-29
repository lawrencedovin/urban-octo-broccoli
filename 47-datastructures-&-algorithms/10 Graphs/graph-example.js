class PersonNode {
    constructor(name) {
        this.name = name;
        // Instead of an array use a Set so that there's no duplicates.
        this.adjacent = new Set();
    }
}

class FriendGraph {
    constructor() {
        this.nodes = new Set();
    }

    addPerson(person) {
        this.nodes.add(person);
    }

    addPeople(people) {
        for(let person of people) {
            this.nodes.add(person);
        }
    }

    setFriends(person1, person2) {
        person1.adjacent.add(person2);
        person2.adjacent.add(person1);
    }
    
}

const homer = new PersonNode('homer');
const marge = new PersonNode('marge');
const maggie = new PersonNode('maggie');
const lisa = new PersonNode('lisa');
const grampa = new PersonNode('grampa');
const simpsons = new FriendGraph();
simpsons.addPeople([homer, marge, maggie, lisa, grampa]);
simpsons.setFriends(homer, marge);
simpsons.setFriends(maggie, homer);
simpsons.setFriends(maggie, marge);
simpsons.setFriends(maggie, lisa);
simpsons.setFriends(lisa, grampa);
console.log(simpsons);