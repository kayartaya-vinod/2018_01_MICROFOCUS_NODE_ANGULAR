import { Pipe, PipeTransform } from '@angular/core';

// {{ contact.dob | age }} --> 44 years
// {{ contact.dob | age: 1 }} --> 44 years
// {{ contact.dob | age: 2 }} --> 44 years and 11 months
// {{ contact.dob | age: 3 }} --> 44 years, 11 months and 20 days
// {{ contact.dob | age: 6 }} --> 44 years



@Pipe({
    name: 'age'
})
export class AgePipe implements PipeTransform {

    transform(dob: string, flag: number = 1): string {
        if(!dob) return '';

        let dt: Date;
        dt = new Date(dob);
        let diff = Date.now() - dt.getTime();
        dt = new Date(diff);
        let y, m, d;
        y = dt.getFullYear() - 1970;
        m = dt.getMonth();
        d = dt.getDate();

        switch(flag){
            case 2: return `${y} years and ${m} months`;
            case 3: return `${y} years, ${m} months and ${d} days`;
            default: return `${y} years`;
        }
    }

}