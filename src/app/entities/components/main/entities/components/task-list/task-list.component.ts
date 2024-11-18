import { Component, EventEmitter, inject, Input, OnDestroy, Output } from '@angular/core';
import { DataService } from '../../../../../services/data.service';
import { FormBuilderService } from '../../../../../services/form-builder.service';
import { ITask } from '../../../../../interfaces/task.interface';
import { Observable, Subject, takeUntil } from 'rxjs';
import { EPriority } from '../../../../../enums/priority.enum';
import { EStatus } from 'src/app/entities/enums/status.enum';
import { DxAutocompleteModule, DxButtonModule } from 'devextreme-angular';
import { DatePipe, NgFor, NgIf, NgSwitch, NgSwitchCase, UpperCasePipe } from '@angular/common';
import { FiltersPipe } from 'src/app/entities/pipes/filters.pipe';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    DxAutocompleteModule,
    DxButtonModule,
    DatePipe,
    UpperCasePipe,
    FiltersPipe,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgFor
  ],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnDestroy {
  private readonly _dataService = inject(DataService);
  private readonly _formBuilderService = inject(FormBuilderService);

  @Input({required: true})
  public tasks: ITask[] = [];

  @Output()
  public getTask = new EventEmitter();

  public filtersForm = this._formBuilderService.filtersForm;
  public destroy$$: Subject<void> = new Subject();

  protected readonly EPriority: typeof EPriority = EPriority;
  protected readonly EStatus: typeof EStatus = EStatus;

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
    this._dataService.refreshTask(task).pipe(
      takeUntil(this.destroy$$)
    ).subscribe();
  }

  /**
   * Метод повышения статуса задачи
   * 
   * @param {ITask} task - задача
   */
  public toUpperStatus(task: ITask): void {
    task.status += 1;
    this._dataService.refreshTask(task).pipe(
      takeUntil(this.destroy$$)
    ).subscribe();
  }

  /**
   * Метод удаления задачи
   * 
   * @param {number} id - айди задачи
   */
  public deleteTask(id: number | null): void {
    if (id !== null) {
      this._dataService.deleteTask(id).pipe(
        takeUntil(this.destroy$$)
      ).subscribe(() =>  this.getTask.emit());
    }
  }

  /** 
   * Метод редактирования задачи
   * 
   * @param {ITask} task - задача
   */
  public taskEdit(task: ITask): void {
    this._dataService.refreshTask(task).pipe(
      takeUntil(this.destroy$$)
    ).subscribe();
  }
}
