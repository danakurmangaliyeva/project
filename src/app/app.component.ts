import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public logged: boolean = false
  title = 'academ';
  ngOnInit() {
    let isUser = localStorage.getItem('token')
    if(isUser) {
      this.logged = true
    }
  }
  onLogout() {
    localStorage.clear()
    this.logged = false
  }
}
