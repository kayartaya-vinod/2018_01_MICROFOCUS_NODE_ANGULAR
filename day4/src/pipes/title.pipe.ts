import { PipeTransform, Pipe } from "@angular/core";


// <span> {{ contact.gender | title }} </span>

@Pipe({
    name: 'title'
})
export class TitlePipe implements PipeTransform {
    
    transform(gender: string): string {
        if(!gender) return '';

        switch(gender.toLowerCase()){
            case 'male': case 'm': return 'Mr.';
            case 'female': case 'f': return 'Ms.';
            default: return '';
        }
    }

}