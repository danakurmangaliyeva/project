import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../program.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.css']
})
export class ProgramDetailsComponent implements OnInit {
  public program
  public reqs
  constructor(private programService: ProgramService, private route: ActivatedRoute) { }
  private id = this.route.snapshot.paramMap.get('id')
  ngOnInit(): void {
    this.programService.getProgram()
      .subscribe(data => {
        this.program = data.find(o => o.id == this.id)
        this.reqs = this.program.requirements.split(',')
      })
  }
}
