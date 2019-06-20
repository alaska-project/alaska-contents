import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ContentsService } from 'projects/alaska-contents/src/lib/services/contents/contents.service';
import { ContentItem } from 'projects/alaska-contents/src/public-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dynamic-item',
  templateUrl: './dynamic-item.component.html',
  styleUrls: ['./dynamic-item.component.scss']
})
export class DynamicItemComponent implements OnInit, AfterViewInit {

  item: Observable<ContentItem>;

  @Input()
  itemId: string;

  constructor(private contentService: ContentsService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.item = this.contentService.getContentItem(this.itemId);
  }
}
