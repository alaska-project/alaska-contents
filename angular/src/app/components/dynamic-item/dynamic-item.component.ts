import { Component, OnInit, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { ContentsService } from 'projects/alaska-contents/src/lib/services/contents/contents.service';
import { ContentItem } from 'projects/alaska-contents/src/public-api';
import { Observable, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-dynamic-item',
  templateUrl: './dynamic-item.component.html',
  styleUrls: ['./dynamic-item.component.scss']
})
export class DynamicItemComponent implements OnInit, AfterViewInit, OnDestroy {
  
  private itemSubscription: Subscription;
  item: ContentItem;

  @Input()
  itemId: string;

  constructor(private contentService: ContentsService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.itemSubscription = this.contentService.getContentItem(this.itemId).subscribe(x => this.item = x);
  }

  ngOnDestroy(): void {
    this.itemSubscription.unsubscribe();
  }
}
