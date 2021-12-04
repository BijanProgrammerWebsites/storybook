import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeadWithZeroPipe} from './lead-with-zero.pipe';

@NgModule({
    declarations: [LeadWithZeroPipe],
    imports: [CommonModule],
    exports: [LeadWithZeroPipe],
})
export class PipesModule {}
