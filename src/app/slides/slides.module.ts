import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoverComponent} from './cover/cover.component';
import {TableOfContentsComponent} from './table-of-contents/table-of-contents.component';
import {PipesModule} from '../pipes/pipes.module';
import {ChapterStartComponent} from './chapter-start/chapter-start.component';
import {TwoColumnComponent} from './two-column/two-column.component';
import {IconsModule} from '../icons/icons.module';
import {ConnectedIslandsComponent} from './connected-islands/connected-islands.component';
import {ThanksComponent} from './thanks/thanks.component';

@NgModule({
    declarations: [
        CoverComponent,
        TableOfContentsComponent,
        ChapterStartComponent,
        TwoColumnComponent,
        ConnectedIslandsComponent,
        ThanksComponent,
    ],
    exports: [
        CoverComponent,
        TableOfContentsComponent,
        ChapterStartComponent,
        TwoColumnComponent,
        ConnectedIslandsComponent,
        ThanksComponent,
    ],
    imports: [CommonModule, PipesModule, IconsModule],
})
export class SlidesModule {}
