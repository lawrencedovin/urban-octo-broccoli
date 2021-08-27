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

    areConnected(person1, person2) {
        let toVisitStack = [person1];
        let seen = new Set(toVisitStack);

        while(toVisitStack.length) {
            let currentPerson = toVisitStack.pop();

            if(currentPerson === person2) return true;

            for(let neighbor of currentPerson.adjacent) {
                // if neighbor was not seen
                if(!seen.has(neighbor)){
                    toVisitStack.push(neighbor);
                    seen.add(neighbor);
                }
            }
        }
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

const moe = new PersonNode('moe');
const barney = new PersonNode('barney');
const lenny = new PersonNode('lenny');

simpsons.addPeople([moe, barney, lenny]);
simpsons.setFriends(moe, barney);
simpsons.setFriends(lenny, barney);

console.log(simpsons.areConnected(homer, lisa));
console.log(simpsons.areConnected(lenny, homer));