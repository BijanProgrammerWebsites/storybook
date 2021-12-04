import {Component, Input} from '@angular/core';

@Component({
    selector: 'slide-connected-islands',
    templateUrl: './connected-islands.component.html',
    styleUrls: ['./connected-islands.component.scss'],
})
export class ConnectedIslandsComponent {
    @Input() public heading!: string;
    @Input() public items!: string[];
}
