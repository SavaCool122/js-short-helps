class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  fire(action) {
    this.observers.forEach((observer) => {
      observer.update(action);
    });
  }
}

class Observer {
  constructor(state = 1) {
    this.state = state;
    this.initialState = state;
  }

  update(action) {
    switch (action.type) {
      case "INCREMENT":
        this.state = ++this.state;
        break;
      case "DECREMENT":
        this.state = --this.state;
        break;
      case "ADD":
        this.state += action.payload;
        break;
      default:
        this.state = this.initialState;
    }
  }
}

// const stream$ = new Subject();

// const obs1 = new Observer();
// const obs2 = new Observer(42);

// stream$.subscribe(obs1);
// stream$.subscribe(obs2);

// stream$.fire({ type: "INCREMENT" });
// stream$.fire({ type: "DECREMENT" });
// stream$.fire({ type: "ADD", payload: 10 });

// console.log(obs1.state);
// console.log(obs2.state);

/////////////////////////

class ListOfPeople {
  constructor() {
    this.peoples = [];
  }

  subscribe(human) {
    this.peoples.push(human);
  }

  unsubscribe(human) {
    this.peoples = this.peoples.filter((hum) => hum !== human);
  }
  fire(action) {
    this.peoples.forEach((human) => {
      human.update(action);
    });
  }
}

class Human {
  constructor(money = 1000) {
    this.money = money;
    this.initialMoney = money;
  }

  update(action) {
    switch (action.type) {
      case "ADDMONEY":
        this.money = this.money + 1000;
        break;
      case "MINUSMONEY":
        this.money = this.money - 1000;
        break;
      case "ADD":
        this.money += action.payload;
        break;
      default:
        this.money = this.initialMoney;
        break;
    }
  }
}

const List = new ListOfPeople();

const zp1 = new Human(5000);
const zp2 = new Human();

List.subscribe(zp1);
List.subscribe(zp2);

zp1.update({ type: "ADDMONEY" });
zp2.update({ type: "MINUSMONEY" });

List.fire({ type: "ADD", payload: 40000 });

console.log(zp1.money);
console.log(zp2.money);
