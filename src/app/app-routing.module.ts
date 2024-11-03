import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './entities/components/main/main.component';
import { TaskGridComponent } from './entities/components/task-grid/task-grid.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'grid',
    component: TaskGridComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'main'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
