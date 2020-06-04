export enum SubjectArea {
  ART, HISTORY, SCIENCE, LITERATURE
}

export enum Days {
  // custom values
  M = "Monday", T = "Tuesday", W = "Wednesday", R = "Thursday", F = "Friday"
}

export class Book {
  private _title: string;
  private _author: string;
  private _price: number;
  public recommendation: string;
  readonly id: number;
  public subject: SubjectArea

  // optional parameters at end of params and suffix `?`
  constructor(title: string, author: string, price?: number) {
    this._title = title;
    this._author = author;

    if (price) {
      this._price = price;
    }

    this.id = 1;
  }

  get title(): string {
    return this._title;
  }

  get author(): string {
    return this._author;
  }

  get price(): number {
    return this._price;
  }

  toString(): string {
    return `title ${this.title}, author ${this.author}, price ${this.price}`
  }

  priceWithTax(taxRate: number): number {
      return this.price + (1 + taxRate);
  }
}

// can have mulitiple classes in one file
export class Video {

}
