import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../program.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  program = {
    name:'',
    description:'',
    status: '',
    major:''
  }

  constructor(private programService: ProgramService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.programService.setProgram(this.program)
  }

}
