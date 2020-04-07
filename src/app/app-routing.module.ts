import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { CategoriesComponent } from './categories/categories.component';
import { AcademListComponent } from './academ-list/academ-list.component';
import { ProgramDetailsComponent } from './program-details/program-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/demo', pathMatch: 'full' },
  { path: 'demo',  component: DemoComponent},
  { path: 'categories', component: CategoriesComponent, children: [
    { path: ':status/:major', component: AcademListComponent}
  ] },
  { path: 'program-details/:id', component: ProgramDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
