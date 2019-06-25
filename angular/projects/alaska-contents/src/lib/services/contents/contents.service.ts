import { Injectable } from '@angular/core';
import { ContentsClient } from '../../clients/contents.client';
import { ContextService } from '../context/context.service';
import { mergeMap, map } from 'rxjs/operators';
import { ContentsSearchDepth, ContentsSearchRequest } from '../../models/content-search-models';

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
      map(x => x.value)
    );
  };

  getContent(id: string, depth?: ContentsSearchDepth) {
    if (!id) {
      throw new Error('Missing item id');
      return;
    }

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
    return this.contentsClient.getContents(request).pipe(
      map(x => x.item)
    );;
  }
}
