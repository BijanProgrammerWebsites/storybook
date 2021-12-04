import {Component, Input} from '@angular/core';

@Component({
    selector: 'slide-cover',
    templateUrl: './cover.component.html',
    styleUrls: ['./cover.component.scss'],
})
export class CoverComponent {
    @Input() public heading!: string;
    @Input() public professor!: string;
    @Input() public creators!: string[];
    @Input() public footer!: string[];
}
