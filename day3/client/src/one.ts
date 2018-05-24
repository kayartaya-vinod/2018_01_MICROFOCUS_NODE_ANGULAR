import { AUTHOR_INFO, Person } from './person';

let p1 = new Person('Vinod', 45);
p1.addPhone('9731424784');
p1.addPhone('9844083934');

console.log("Person data: " + p1); // p1.toString() is called while concatenating
console.log('Author info: ', AUTHOR_INFO);

console.log(p1.getPhones());

import * as mu from './math-utils';

console.log('square of 24 is ', mu.square(24));
console.log('[2, 5, 10, 20] squares--> ', mu.squares([2, 5, 10, 20]));
