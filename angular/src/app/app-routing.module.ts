import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaticItemComponent } from './components/static-item/static-item.component';
import { DynamicItemComponent } from './components/dynamic-item/dynamic-item.component';

const routes: Routes = [{
  path: '',
  component: StaticItemComponent
}, {
  path: 'dynamic-item',
  component: DynamicItemComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
