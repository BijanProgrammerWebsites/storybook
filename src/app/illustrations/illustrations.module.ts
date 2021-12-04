import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StorybookComponent} from './storybook/storybook.component';
import {ThanksComponent} from './thanks/thanks.component';

@NgModule({
    declarations: [StorybookComponent, ThanksComponent],
    imports: [CommonModule],
    exports: [StorybookComponent, ThanksComponent],
})
export class IllustrationsModule {}
