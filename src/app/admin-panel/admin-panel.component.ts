import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../program.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  public programs
  public editable: boolean = false  
  program = {
    id: 0,
    name:'',
    text:'',
    status: '',
    major:'',
    requirements: ''
  }

  constructor(private programService: ProgramService) { }

  ngOnInit(): void {
    this.programService.getProgram().subscribe(data => {
      this.programs = data
    })
  }
  onDelete(id) {
    this.programService.deleteProgram(id).subscribe()
  }
  onEdit(id) {
    this.editable = true
    this.programService.getProgram().subscribe(data => {
      let program = data.find(o => o.id == id)
      this.program.name = program.name
      this.program.status = program.status.name
      this.program.text = program.text
      this.program.major = program.major.name
      this.program.id = id
      this.program.requirements = program.requirements
    })
  }
  onCreate(): void {
    this.programService.setProgram(this.program).subscribe()
  }

  onUpdate() {
    this.programService.updateProgram(this.program).subscribe()
  }
}
