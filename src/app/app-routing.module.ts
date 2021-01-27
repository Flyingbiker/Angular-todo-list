import { ParamPageComponent } from './param-page/param-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component : HomePageComponent},
  {path : 'blabla', component: FooComponent},
  {path : 'params', component: ParamPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
