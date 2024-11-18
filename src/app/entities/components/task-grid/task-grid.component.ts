import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { ITask } from '../../interfaces/task.interface';
import { LTask } from '../../labels/task.label';
import { DxDataGridModule } from 'devextreme-angular';
import { AsyncPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-task-grid',
  standalone: true,
  imports: [
    DxDataGridModule,
    AsyncPipe,
    HttpClientModule
  ],
  providers: [DataService],
  templateUrl: './task-grid.component.html',
  styleUrls: ['./task-grid.component.scss']
})
export class TaskGridComponent {
  private readonly _dataService = inject(DataService);

  public tasks$: Observable<any> = this._dataService.getTask().pipe(
    map((items: ITask[]) => {
      return items.map((item: ITask) => {
        return {
          ...item,
          taskDate: new Date(item.taskDate).toLocaleDateString() + ' ' + new Date(item.taskDate).getHours() 
          + ':' + ('0' + new Date(item.taskDate).getMinutes()).slice(-2)
        }
      })
    })
  );

  protected readonly LTask: typeof LTask = LTask;
}
