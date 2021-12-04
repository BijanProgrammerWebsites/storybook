import {Component, Input} from '@angular/core';

@Component({
    selector: 'slide-table-of-contents',
    templateUrl: './table-of-contents.component.html',
    styleUrls: ['./table-of-contents.component.scss'],
})
export class TableOfContentsComponent {
    @Input() public items!: string[];
}
