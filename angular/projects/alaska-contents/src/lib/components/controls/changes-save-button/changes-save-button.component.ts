import { Component, OnInit } from '@angular/core';
import { PandingChangesService } from '../../../services/pending-changes/panding-changes.service';

@Component({
  selector: 'aly-changes-save-button',
  templateUrl: './changes-save-button.component.html',
  styleUrls: ['./changes-save-button.component.scss']
})
export class ChangesSaveButtonComponent implements OnInit {

  constructor(private pandingChangesService: PandingChangesService) { }

  ngOnInit() {
  }

  save() {
    
  }

}
