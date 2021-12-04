import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    HostListener,
    OnDestroy,
    ViewChild,
} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-slideshow',
    templateUrl: './slideshow.component.html',
    styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements AfterViewInit, OnDestroy {
    @ViewChild('slideshow') public slideshow!: ElementRef<HTMLElement>;

    public slideIndex: number = 1;

    public tableOfContents: string[] = ['Introduction', 'Design System', 'Elements of a Design System', 'Examples'];
    public dataVisualizationBenefits: string[] = [
        'Finding errors',
        'Better analysis',
        'Identifying patterns',
        'Quick action',
        'Understanding the story',
        'Exploring business insights',
    ];

    private subscriptions: Subscription[] = [];

    public constructor(
        private route: ActivatedRoute,
        private router: Router,
        private changeDetectorRef: ChangeDetectorRef
    ) {}

    public ngAfterViewInit(): void {
        this.subscriptions.push(
            this.route.params.subscribe((params) => {
                const index = Number.parseInt(params['index']);
                this.slideIndex = isNaN(index) ? 1 : index;
                this.changeDetectorRef.detectChanges();
            })
        );
    }

    public get slidesCount(): number {
        return this.slideshow?.nativeElement.childElementCount || 1;
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }

    @HostListener('window:keydown', ['$event'])
    public async onKeyDown(event: KeyboardEvent): Promise<void> {
        console.log(event.key);

        if (event.key === 'ArrowRight') await this.changeSlide(this.slideIndex + 1);
        else if (event.key === 'ArrowLeft') await this.changeSlide(this.slideIndex - 1);
        else if (event.key === 'Escape') await this.router.navigateByUrl('/');
    }

    private async changeSlide(index: number): Promise<void> {
        if (index < 1 || this.slidesCount < index) return;

        await this.router.navigateByUrl(`slideshow/${index}`);
        this.slideIndex = index;
    }
}
