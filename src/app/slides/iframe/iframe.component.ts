import {Component, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'slide-iframe',
    templateUrl: './iframe.component.html',
    styleUrls: ['./iframe.component.scss'],
})
export class IframeComponent {
    @Input() public heading!: string;
    @Input() public url!: string;
    @Input() public position: HorizontalPosition = 'left';

    public constructor(public sanitizer: DomSanitizer) {}
}
