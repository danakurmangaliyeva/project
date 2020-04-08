import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { CategoriesComponent } from './categories/categories.component';
import { SearchComponent } from './search/search.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HttpClientModule } from '@angular/common/http';
import { AcademListComponent } from './academ-list/academ-list.component';
import { ProgramItemComponent } from './program-item/program-item.component';
import { ProgramDetailsComponent } from './program-details/program-details.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    CategoriesComponent,
    SearchComponent,
    AcademListComponent,
    ProgramItemComponent,
    ProgramDetailsComponent,
    LoginComponent,
    SingupComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
