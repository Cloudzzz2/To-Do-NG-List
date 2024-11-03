import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../../../../services/data.service';
import { FormBuilderService } from '../../../../../services/form-builder.service';
import { ITask } from '../../../../../interfaces/task.interface';
import { Observable, Subject, takeUntil } from 'rxjs';
import { EPriority } from '../../../../../enums/priority.enum';
import { EStatus } from 'src/app/entities/enums/status.enum';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {
  public tasksArray: ITask[] = [];
  public filtersForm = this._formBuilderService.filtersForm;
  public tasks$: Observable<ITask[]> = this._dataService.tasks$;
  public destroy$$: Subject<void> = new Subject();

  protected readonly EPriority: typeof EPriority = EPriority;
  protected readonly EStatus: typeof EStatus = EStatus;

  constructor(
    private _dataService: DataService,
    private _formBuilderService: FormBuilderService
  ) {}

  public ngOnInit(): void {
    this._dataService.tasks$.pipe(
      takeUntil(this.destroy$$)
    ).subscribe((tasks: ITask[]) => {
      this.tasksArray = [...tasks];
    });
  }

  public ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
  }


  /**
   * Метод понижения статуса задачи
   * 
   * @param {ITask} task - задача
   */
  public toLowerStatus(task: ITask): void {
    task.status -= 1;
    this._dataService.refreshTask(task);
  }

  /**
   * Метод повышения статуса задачи
   * 
   * @param {ITask} task - задача
   */
  public toUpperStatus(task: ITask): void {
    task.status += 1;
    this._dataService.refreshTask(task);
  }

  /**
   * Метод удаления задачи
   * 
   * @param {number} id - айди задачи
   */
  public deleteTask(id: number | null): void {
    if (id !== null) {
      this._dataService.deleteTask(id);
    }
  }

  /** 
   * Метод редактирования задачи
   * 
   * @param {ITask} task - задача
   */
  public taskEdit(task: ITask): void {
    this._dataService.refreshTask(task);
  }
}
