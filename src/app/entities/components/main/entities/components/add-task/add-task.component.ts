import { Component, DestroyRef, EventEmitter, inject, OnDestroy, Output } from '@angular/core';
import { FormBuilderService } from '../../../../../services/form-builder.service';
import { ITask } from '../../../../../interfaces/task.interface';
import { DataService } from '../../../../../services/data.service';
import { AppLib } from '../../../../../libs/app.lib';
import { LTask } from 'src/app/entities/labels/task.label';
import { ReactiveFormsModule } from '@angular/forms';
import { LInputForm } from 'src/app/entities/labels/input-form.label';
import { IItem } from 'src/app/entities/interfaces/item.interface';
import { LIcon } from 'src/app/entities/labels/icon.labels';
import { DxSelectBoxModule, DxTextBoxModule, DxButtonModule } from 'devextreme-angular';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
export class AddTaskComponent {
  private readonly _dataService: DataService = inject(DataService);
  private readonly _formBuilderService: FormBuilderService = inject(FormBuilderService);
  private readonly _destroyRef: DestroyRef = inject(DestroyRef); 


  @Output()
  public refreshTask: EventEmitter<void> = new EventEmitter();

  public priorities: IItem[] = AppLib.priorityVariants;
  public inputForm = this._formBuilderService.getInputForm();
  public task: ITask = <ITask>{};

  protected readonly LIcon: typeof LIcon = LIcon;
  protected readonly LInputForm: typeof LInputForm = LInputForm;

  /**
   * Метод добавления задачи
   */
  public addTask(): void {
    if (this.inputForm.valid) {
      let priorityText: IItem | undefined = AppLib.priorityVariants.find((item) => item.value === this.inputForm.controls['priority'].value);
      this.task = {
        [LTask.ID]: null,
        [LTask.TEXT]: <string>this.inputForm.controls[LInputForm.INPUT].value,
        [LTask.DATE]: new Date(),
        [LTask.PRIORITY_TEXT]: <string>priorityText?.text,
        [LTask.PRIORITY]: <number>this.inputForm.controls[LInputForm.PRIORITY].value,
        [LTask.STATUS]: AppLib.defaultStatus
      };
      this._dataService.addTask(this.task).pipe(
        takeUntilDestroyed(this._destroyRef)
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
