const car = {
    wheels = 4,

    init() {
        console.log(`${this.wheels} : ${this.owner}`);
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Dimaas '
    }
})

carWithOwner.init()