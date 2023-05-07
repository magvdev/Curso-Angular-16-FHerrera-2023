// Método largo
// export class Person {
//   public name: string;
//   private address?: string;

//   constructor(name: string, address: string) {
//     this.name = name;
//     this.address = address;
//   }
// }

// Método corto
export class Person {

  constructor(public name: string, private address: string = 'No address') {
    this.name = name;
    this.address = address;
  }
}

// // Extends
// export class Hero extends Person {

//   constructor(public alterEgo: string, public age: number, public realName: string) {
//     super(realName, 'New York, USA')
//   }
// }

// Composición
export class Hero {

  constructor(public person: Person, public alterEgo: string, public age: number, public realName: string) {
    // this.person = new Person(realName)
  }
}

const person = new Person('Ironman', 'New York, USA');

const ironMan = new Hero(person, 'Ironman', 45, 'Tony Stark');

console.log('ironMan :>> ', ironMan);