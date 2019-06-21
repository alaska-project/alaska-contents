import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaticItemPageComponent } from './pages/static-item-page/static-item-page.component';
import { DynamicItemPageComponent } from './pages/dynamic-item-page/dynamic-item-page.component';

const routes: Routes = [{
  path: '',
  component: StaticItemPageComponent
}, {
  path: 'dynamic-item',
  component: DynamicItemPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
