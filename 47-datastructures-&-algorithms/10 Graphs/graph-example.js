class PersonNode {
    constructor(name, adjacent=new Set()) {
        this.name = name;
        // Instead of an array use a Set so that there's no duplicates.
        this.adjacent = adjacent;
    }
}

class FriendNode {
    constructor(name) {
        this.name = name;
    }

    addFriend(person1, person2) {
        person1.adjacent.add(person2);
        person2.adjacent.add(person1);
    }
    
}

const homer = new PersonNode('homer');
const marge = new PersonNode('marge');
const maggie = new PersonNode('maggie');

homer.adjacent.add(marge);
marge.adjacent.add(homer);

maggie.adjacent.add(homer);
maggie.adjacent.add(marge);