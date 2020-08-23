// export class Ingredient {
    // public name: string;
    // public amount: number;

    // constructor(name: string, amount: number) {
        // this.name = name;
        // this.amount = amount;
    // }
// }
// alternate construction below that does the same thing - angular shortcut

export class Ingredient {
    constructor(public name: string, public amount: number) {}
}