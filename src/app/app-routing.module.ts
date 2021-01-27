import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component : BarComponent},
  {path : 'blabla', component: FooComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
