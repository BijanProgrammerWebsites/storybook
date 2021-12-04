import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryComponent} from './gallery/gallery.component';
import {SlideshowComponent} from './slideshow/slideshow.component';
import {SlidesModule} from '../slides/slides.module';
import {IllustrationsModule} from '../illustrations/illustrations.module';
import {IconsModule} from '../icons/icons.module';

@NgModule({
    declarations: [GalleryComponent, SlideshowComponent],
    imports: [CommonModule, SlidesModule, IllustrationsModule, IconsModule],
})
export class PagesModule {}
