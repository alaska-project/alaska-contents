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

  getContent(id: string, depth?: ContentsSearchDepth) {
    this.contextService.currentContext().pipe(
      map(x => this.getContentItem({
        id: id,
        depth: depth ? depth : this.defaultDepth,
        language: x.language,
        publishingTarget: x.publishingTarget,
      }))
    );
  }

  private getContentItem(request: ContentsSearchRequest) {
    return this.contentsClient.getContents(request);
  }
}
