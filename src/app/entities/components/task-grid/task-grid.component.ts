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
  private readonly _dataService: DataService = inject(DataService);

  protected readonly LTask: typeof LTask = LTask;

  public tasks$: Observable<ITask<string>[]> = this._dataService.getTask().pipe(
    map((items: ITask[]) => {
      return items.map((item: ITask) => {
        const dateToday: Date = new Date(item.taskDate);
        return {
          ...item,
          taskDate: `${dateToday.toLocaleDateString()} ${dateToday.getHours()}:${('0' + dateToday.getMinutes()).slice(-2)}`
        }
      })
    })
  );
}
