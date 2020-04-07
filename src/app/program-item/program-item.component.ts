import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-program-item',
  templateUrl: './program-item.component.html',
  styleUrls: ['./program-item.component.css']
})
export class ProgramItemComponent implements OnInit {
  @Input() program
  public demoText
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.demoText = this.program.text.split('.').slice(0, 2)
  }

  programDetails(id) {
    this.router.navigate(['program-details', id])
  }

}
