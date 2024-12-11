import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AddTaskComponent } from './entities/components/add-task/add-task.component';
import { FilterTaskComponent } from './entities/components/filter-task/filter-task.component';
import { TaskListComponent } from './entities/components/task-list/task-list.component';
import { FormBuilderService } from '../../services/form-builder.service';
import { AsyncPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITask } from '../../interfaces/task.interface';
import { IFilterForm } from '../../interfaces/filter-form.interface';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    AddTaskComponent,
    FilterTaskComponent,
    TaskListComponent,
    HttpClientModule,
    AsyncPipe
  ],
  providers: [DataService, FormBuilderService],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  private readonly _dataService: DataService = inject(DataService);
  private readonly _formBuilderService: FormBuilderService = inject(FormBuilderService);


  public tasks$: Observable<ITask[]> = this._dataService.getTask();

  public filtersFormData: IFilterForm | null = null; 

  /**
   * Метод получения списка задач
   */
  public getTask(): void {
    this.tasks$ = this._dataService.getTask();
  }

  /**
   * Метод получения значения полей формы
   */
  public getFiltersForm(filtersForm: IFilterForm) {
    this.filtersFormData = filtersForm;
  }
}
