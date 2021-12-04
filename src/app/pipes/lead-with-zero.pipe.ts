import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'leadWithZero',
})
export class LeadWithZeroPipe implements PipeTransform {
    public transform(value: number): string {
        const {length} = value.toString();
        return '0'.repeat(Math.max(0, 2 - length)) + value.toString();
    }
}
