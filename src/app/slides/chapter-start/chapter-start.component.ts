import {Component, Input} from '@angular/core';

@Component({
    selector: 'slide-chapter-start',
    templateUrl: './chapter-start.component.html',
    styleUrls: ['./chapter-start.component.scss'],
})
export class ChapterStartComponent {
    @Input() public index!: number;
    @Input() public heading!: string;
    @Input() public verticalPosition: VerticalPosition = 'center';
    @Input() public horizontalPosition: HorizontalPosition = 'center';
}
