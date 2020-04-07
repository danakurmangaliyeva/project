import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramService } from '../program.service';

@Component({
  selector: 'app-academ-list',
  templateUrl: './academ-list.component.html',
  styleUrls: ['./academ-list.component.css']
})
export class AcademListComponent implements OnInit {
  public programList = []

  constructor(private route: ActivatedRoute, private programService: ProgramService) { }

  ngOnInit(): void {
    let statusParam: string
    let majorParam: string
  
    this.route.params.subscribe(param => {

      if(param.status == 'all') statusParam = ""; else  statusParam = param.status
      if(param.major == 'all') majorParam = ""; else  majorParam = param.major

      console.log(statusParam, majorParam)
      
      this.programService.getProgram()
        .subscribe(data => {
          this.programList = data.filter(o => o.status.includes(statusParam) && o.major.includes(majorParam))
        })
    })
  }

}
