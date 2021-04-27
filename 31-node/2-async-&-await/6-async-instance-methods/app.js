class Pokemon {
    constructor(id) {
        this.id = id;
        this.types = [];
    }
    async getInfo() {
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        let pokemon = res.data.name;
        console.log(pokemon);
        res.data.types.forEach((type) => this.types.push(type.type.name));
        // for (let type of res.data.types) {
        //     types.push(type.type.name);
        // }
        console.log(`Types: ${this.types}`);
    }
}

pokemon56 = new Pokemon(56);