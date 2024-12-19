import { Component, DestroyRef, EventEmitter, inject, Input, Output } from '@angular/core';
import { DataService } from '../../../../../services/data.service';
import { ITask } from '../../../../../interfaces/task.interface';
import { EPriority } from '../../../../../enums/priority.enum';
import { EStatus } from 'src/app/entities/enums/status.enum';
import { DxAutocompleteModule, DxButtonModule } from 'devextreme-angular';
import { DatePipe, NgClass, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FiltersPipe } from 'src/app/entities/pipes/filters.pipe';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IFilterForm } from 'src/app/entities/interfaces/filter-form.interface';

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
  private readonly _destroyRef: DestroyRef = inject(DestroyRef);

  @Input({required: true})
  public tasks: ITask[] = [];

  @Input({required: true})
  public filtersFormData: IFilterForm | null = null;

  @Output()
  public refreshTask: EventEmitter<void> = new EventEmitter();


  protected readonly EPriority: typeof EPriority = EPriority;
  protected readonly EStatus: typeof EStatus = EStatus;

  /**
   * Метод изменения статуса задачи
   * 
   * @param {ITask} task - задача
   * @param {boolean} upStatus - значение статуса
   */
  public changeStatus(task: ITask, upStatus: boolean): void {
    if (upStatus) {
      task.status += 1;
    } else {
      task.status -= 1;
    }
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
