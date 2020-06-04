import { Component } from '@angular/core';
import { Book, Video, SubjectArea, Days } from 'src/model/Model';

// ts is compiled to js at run time
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exploring-typescript';

  // variable creation
  myNumber: number;

  // readonly for immutable class level
  readonly immutableNumber: number = 2;

  constructor() {
    // js object syntax
    let myCustomer = {
      firstName: "Robert",
      age: 24
    };

    this.testObjectEquality();

    console.log(myCustomer);
    console.log(typeof myCustomer);

    let book = new Book("Effective Java", "Joshua Block", 43);
    let video: Video;

    console.log(book.author);
    book.recommendation = "ok";

    console.log(book.recommendation);
    console.log(book.toString());

    // can log with comma on an object to show the full object
    console.log(`the price of the book after tax is ${book.priceWithTax(1.2)}`);

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(`The following numbers are even: ${numbers.filter(x => x % 2 === 0)}`);

    console.log(SubjectArea.HISTORY);
    console.log(SubjectArea[2]);

    book.subject = SubjectArea.LITERATURE;
    console.log(book.subject);

    this.loopSubjectEnum();
    this.loopDayEnum();

    console.log(this.setLabel());
    console.log(this.setLabel2());
  }

  someMethod() {
    // local variable: let is mutable in context of someMoethod, const is immutable
    let anotherNumber: number;
    const aThirdNumber: number = 2;

    // this to access class level variables or functions
    this.myNumber = 2;
    anotherNumber = 1;
  }

  exploringArrays() {
    // both work
    // first param is the array length
    // can also declare with items in comma delimited (like varargs)
    const myArray1 = new Array<number>(5);
    const myArray2: number[] = [1, 2, 3];

    // first array should be empty with length 5
    console.log(myArray1);
    // second array should have 3 items: 1, 2 and 3
    console.log(myArray2);

    // get item in array, 0 index based. should print 2
    console.log(myArray2[1]);

    // prints list with number 2
    console.log(myArray2.slice(1, 2))

    // deletes items from arrays, returns 2 if line 43 is commented out
    console.log(myArray2.splice(1, 1));

    // adds item to the end
    myArray2.push(4);

    // returns and removes the last item on the list
    myArray2.pop();

    // traditional for loop - not idiomatic ts
    // can't use const since we change val
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }

    // foreach loop (use `of` to get values, `in` to get indexes)
    // can use const or let
    for (const next of myArray2) {
      console.log(next);
    }
  }

  testObjectEquality() {
    // == / != is abstract equality: casts the type if applicable
    // === / !== is strict equality: does not cast type

    let myValue: number;

    // true
    // true
    console.log(1 == 1);
    console.log(1 === 1);

    // true
    // false
    // console.log('1' == 1);
    // console.log('1' === 1);

    // false (undefined is not null)
    // true
    // true (casted to undefined) ==  is good for null checks
    // true
    console.log(myValue === null);
    console.log(myValue === undefined);
    console.log(myValue == null);
    console.log(myValue == undefined);

  }

  loopSubjectEnum() {
    // loops through indexes first then the values
    for (const subject in SubjectArea) {
      console.log(subject);
    }

    // to get values convert to array and splice the last half...
    // only needed for enums without custom values
    const enumArray = Object.keys(SubjectArea);
    for (const subject of enumArray.slice(enumArray.length/2)) {
      console.log(subject);
    }
  }

  loopDayEnum() {
    // undefined - can't index off enum with custom values
    // console.log(Days[2]);

    for (const day in Days) {
      // gets name
      console.log(day);

      // gets value
      console.log(Days[day]);
    }

  }

  setLabel(): string {
    let label: string;
    for (const day in Days) {
      if (Days[day] === 'Monday') {
          label = day;
      }
    }

    return label;
  }

  setLabel2(): string {
    // find - gets the first value that matches a predicate
    let label = Object.keys(Days).find(x => Days[x] === 'Monday');
    return label;
  }
}
