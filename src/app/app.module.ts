import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { 
  DxAutocompleteModule,
  DxButtonModule, 
  DxCheckBoxModule, 
  DxDataGridModule, 
  DxSelectBoxModule, 
  DxTemplateModule, 
  DxTextAreaModule, 
  DxTextBoxModule,
} from 'devextreme-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FiltersPipe } from './entities/pipes/filters.pipe';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './entities/components/main/entities/components/add-task/add-task.component';
import { FilterTaskComponent } from './entities/components/main/entities/components/filter-task/filter-task.component';
import { TaskListComponent } from './entities/components/main/entities/components/task-list/task-list.component';
import { MainComponent } from './entities/components/main/main.component';
import { TaskGridComponent } from './entities/components/task-grid/task-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltersPipe,
    AddTaskComponent,
    FilterTaskComponent,
    TaskListComponent,
    MainComponent,
    TaskGridComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule, 
    FormsModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxButtonModule,
    DxTextAreaModule,
    DxCheckBoxModule,
    DxTemplateModule,
    ReactiveFormsModule,
    DxDataGridModule,
    DxAutocompleteModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
