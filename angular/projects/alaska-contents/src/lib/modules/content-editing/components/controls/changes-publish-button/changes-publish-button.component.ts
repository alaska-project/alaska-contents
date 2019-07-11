import { Component, OnInit } from '@angular/core';
import { ContentsUpdateClient } from '../../../clients/contents-update.client';
import { OperationsService } from '../../../services/operations/operations.service';

@Component({
  selector: 'aly-changes-publish-button',
  templateUrl: './changes-publish-button.component.html',
  styleUrls: ['./changes-publish-button.component.scss']
})
export class ChangesPublishButtonComponent implements OnInit {

  constructor(
    private contentsUpdateClient: ContentsUpdateClient,
    private operation: OperationsService) { }

  ngOnInit() {
  }

  publish() {
    
  }
}
