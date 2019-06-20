import { Injectable } from '@angular/core';
import { ContentsClient } from '../../clients/contents.client';

@Injectable({
  providedIn: 'root'
})
export class ContentsService {

  constructor(private contentsClient: ContentsClient) { }

  

}
