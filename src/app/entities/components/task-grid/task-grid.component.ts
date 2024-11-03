import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subject, takeUntil } from 'rxjs';
import { ITask } from '../../interfaces/task.interface';
import { LTask } from '../../labels/task.label';

@Component({
  selector: 'app-task-grid',
  templateUrl: './task-grid.component.html',
  styleUrls: ['./task-grid.component.scss']
})
export class TaskGridComponent implements OnInit, OnDestroy {
  public taskArray: ITask[] = [];
  public destroy$$: Subject<void> = new Subject();

  protected readonly LTask: typeof LTask = LTask;

  constructor(
    private _dataService: DataService
  ) {}

  public ngOnInit(): void {
    this._dataService.tasks$.pipe(
      takeUntil(this.destroy$$)
    ).subscribe((tasks: ITask[]) => {
      this.taskArray = tasks;
    });

    this._dataService.getTask();
  }

  public ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
  }
}
