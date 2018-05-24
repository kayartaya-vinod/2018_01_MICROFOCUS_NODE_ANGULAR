export const AUTHOR_INFO = { name: 'Vinod', email: 'vinod@vinod.co' };
export class Person {
    private name: string;
    private age: number;
    private phones: Array<string> = [];

    constructor(name: string = null, age: number = 20) {
        this.name = name;
        this.age = age;
    }

    addPhone(phone: string): void {
        this.phones.push(phone);
    }

    setName(name: string): void {
        this.name = name;
    }
    setAge(age: number): void {
        this.age = age;
    }

    getPhones(): Array<string> {
        return this.phones;
    }


    toString(): string {
        return `${this.name} is ${this.age} years old.`;
    }
}