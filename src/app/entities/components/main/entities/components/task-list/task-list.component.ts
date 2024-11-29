import { Component, DestroyRef, EventEmitter, inject, Input, Output } from '@angular/core';
import { DataService } from '../../../../../services/data.service';
import { FormBuilderService } from '../../../../../services/form-builder.service';
import { ITask } from '../../../../../interfaces/task.interface';
import { EPriority } from '../../../../../enums/priority.enum';
import { EStatus } from 'src/app/entities/enums/status.enum';
import { DxAutocompleteModule, DxButtonModule } from 'devextreme-angular';
import { DatePipe, NgClass, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FiltersPipe } from 'src/app/entities/pipes/filters.pipe';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
    NgClass,
    NgFor
  ],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  private readonly _dataService: DataService = inject(DataService);
  private readonly _formBuilderService: FormBuilderService = inject(FormBuilderService);
  private readonly _destroyRef: DestroyRef = inject(DestroyRef);

  @Input({required: true})
  public tasks: ITask[] = [];

  @Output()
  public refreshTask: EventEmitter<void> = new EventEmitter();

  public filtersForm = this._formBuilderService.filtersForm;

  protected readonly EPriority: typeof EPriority = EPriority;
  protected readonly EStatus: typeof EStatus = EStatus;

  /**
   * Метод понижения статуса задачи
   * 
   * @param {ITask} task - задача
   */
  public toLowerStatus(task: ITask): void {
    task.status -= 1;
    this._dataService.refreshTask(task).pipe(
      takeUntilDestroyed(this._destroyRef)
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
      takeUntilDestroyed(this._destroyRef)
    ).subscribe();
  }

  /**
   * Метод удаления задачи
   * 
   * @param {number | null} id - идентификатор задачи
   */
  public deleteTask(id: number | null): void {
    if (id !== null) {
      this._dataService.deleteTask(id).pipe(
        takeUntilDestroyed(this._destroyRef)
      ).subscribe(() =>  this.refreshTask.emit());
    }
  }

  /** 
   * Метод редактирования задачи
   * 
   * @param {ITask} task - задача
   */
  public editTask(task: ITask): void {
    this._dataService.refreshTask(task).pipe(
      takeUntilDestroyed(this._destroyRef)
    ).subscribe();
  }
}
