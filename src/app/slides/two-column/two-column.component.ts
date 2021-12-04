import {Component, Input} from '@angular/core';

@Component({
    selector: 'slide-two-column',
    templateUrl: './two-column.component.html',
    styleUrls: ['./two-column.component.scss'],
})
export class TwoColumnComponent {
    @Input() public heading!: string;
    @Input() public paragraphs!: string[];
    @Input() public position: HorizontalPosition = 'left';
}
