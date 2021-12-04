import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SlideshowComponent} from './pages/slideshow/slideshow.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'slideshow/1'},
    {path: 'slideshow', redirectTo: 'slideshow/1'},
    {path: 'slideshow/:index', component: SlideshowComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
