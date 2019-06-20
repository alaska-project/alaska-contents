import { Injectable } from '@angular/core';
import { ContentsClient } from '../../clients/contents.client';
import { ContentsSearchDepth, ContentsSearchRequest } from '../../models/content-models';
import { ContextService } from '../context/context.service';
import { mergeMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentsService {

  private readonly defaultDepth = 'Item';

  constructor(
    private contentsClient: ContentsClient,
    private contextService: ContextService) { }

  getContentItem(id: string, depth?: ContentsSearchDepth) { 
    return this.getContent(id, depth).pipe(
      map(x => x.item.value)
    );
  };

  getContent(id: string, depth?: ContentsSearchDepth) {
    return this.contextService.currentContext().pipe(
      mergeMap(x => this.searchContent({
        id: id,
        depth: depth ? depth : this.defaultDepth,
        language: x.language,
        publishingTarget: x.publishingTarget,
      }))
    );
  }

  private searchContent(request: ContentsSearchRequest) {
    return this.contentsClient.getContents(request);
  }
}
