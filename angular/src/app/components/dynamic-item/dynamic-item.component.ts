import { Component, OnInit, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContentItem, ContentsService } from 'projects/alaska-contents/src/public-api';

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
    this.itemSubscription = this.contentService.getContent(this.itemId).subscribe(x => this.item = x.value);
  }

  ngOnDestroy(): void {
    this.itemSubscription.unsubscribe();
  }
}
