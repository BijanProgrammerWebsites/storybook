import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {KharazmiComponent} from './kharazmi/kharazmi.component';
import {StorybookComponent} from './storybook/storybook.component';

@NgModule({
    declarations: [KharazmiComponent, StorybookComponent],
    imports: [CommonModule],
    exports: [KharazmiComponent, StorybookComponent],
})
export class IconsModule {}
