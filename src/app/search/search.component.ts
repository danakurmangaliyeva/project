import { Component, OnInit, Input } from '@angular/core';
import { StatusService } from '../status.service';
import { MajorService } from '../major.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() statusToggleOn: boolean = false
  @Input() majorToggleOn: boolean = false
  
  public statusList = []
  public majorList = []

  public statusValue: string
  public majorValue: string

  constructor(private statusService: StatusService, private majorService: MajorService, private router: Router) { }

  ngOnInit(): void {
    this.statusService.getStatuses()
      .subscribe(data => {
        this.statusList = data
      })

    this.majorService.getMajors()
      .subscribe(data => {
        this.majorList = data
      })
  } 

  selectedStatus(name) {
    this.statusValue = name
    this.statusToggleOn = false
  }

  selectedMajor(name) {
    this.majorValue = name
    this.majorToggleOn = false
  }

  onSearch(status, major) {
    if(status == null && major == null) {
      this.router.navigate(['/categories', 'all', 'all'])
    }
    else {
      this.router.navigate(['/categories',status, major])
    }
  }

}
