import { Component, EventEmitter, inject, OnDestroy, Output } from '@angular/core';
import { FormBuilderService } from '../../../../../services/form-builder.service';
import { ITask } from '../../../../../interfaces/task.interface';
import { DataService } from '../../../../../services/data.service';
import { AppLib } from '../../../../../libs/app.lib';
import { LTask } from 'src/app/entities/labels/task.label';
import { DxButtonModule, DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { LInputForm } from 'src/app/entities/labels/input-form.label';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    DxSelectBoxModule,
    DxTextBoxModule,
    ReactiveFormsModule,
    DxButtonModule,
  ],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})

export class AddTaskComponent implements OnDestroy {
  private readonly _dataService = inject(DataService);
  private readonly _formBuilderService = inject(FormBuilderService);

  @Output()
  public refreshTask = new EventEmitter();

  public destroy$$: Subject<void> = new Subject();

  public prioritySelect = AppLib.priorityVariants;
  public inputForm = this._formBuilderService.inputForm;
  public task: ITask = <ITask>{};

  public ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
  }

  /**
   * Метод добавления задачи
   */
  public addTask(): void {
    if (this.inputForm.valid) {
      let priorityText = AppLib.priorityVariants.find((item) => item.value === this.inputForm.controls['priority'].value);
      this.task = {
        [LTask.ID]: null,
        [LTask.TEXT]: <string>this.inputForm.controls[LInputForm.INPUT].value,
        [LTask.DATE]: new Date(),
        [LTask.PRIORITY_TEXT]: <string>priorityText?.text,
        [LTask.PRIORITY]: <number>this.inputForm.controls[LInputForm.PRIORITY].value,
        [LTask.STATUS]: AppLib.defaultStatus
      };
      this._dataService.addTask(this.task).pipe(
        takeUntil(this.destroy$$)
      ).subscribe(() => this.refreshTask.emit());
      this.inputForm.setValue({
        priority: this.inputForm.controls[LInputForm.PRIORITY].value,
        taskInput: ''
      });
    } else {
      alert('Слишком маленькая длина задания!');
    }
  }
}
