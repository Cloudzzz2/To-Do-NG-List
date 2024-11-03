import { Component } from '@angular/core';
import { FormBuilderService } from '../../../../../services/form-builder.service';
import { ITask } from '../../../../../interfaces/task.interface';
import { DataService } from '../../../../../services/data.service';
import { AppLib } from '../../../../../libs/app.lib';
import { LTask } from 'src/app/entities/labels/task.label';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})

export class AddTaskComponent {
  public prioritySelect = AppLib.priorityVariants;
  public inputForm = this._formBuilderService.inputForm;
  public task: ITask = <ITask>{};

  constructor(
    private _dataService: DataService,
    private _formBuilderService: FormBuilderService,
  ) {}

  /**
   * Метод добавления задачи
   */

  public addTask(): void{
    if (this.inputForm.valid) {
      let priorityText = AppLib.priorityVariants.find((item) => item.value === this.inputForm.controls['priority'].value)
      this.task = {
        [LTask.ID]: null,
        [LTask.TEXT]: <string>this.inputForm.controls['taskInput'].value,
        [LTask.DATE]: new Date(),
        [LTask.PRIORITY_TEXT]: <string>priorityText?.text,
        [LTask.PRIORITY]: <number>this.inputForm.controls['priority'].value,
        [LTask.STATUS]: AppLib.defaultStatus
      }
      this._dataService.addTask(this.task);
      this.inputForm.setValue({
        priority: this.inputForm.controls['priority'].value,
        taskInput: ''
      });
      this._dataService.getTask()
    } else {
      alert('Слишком маленькая длина задания!');
    }
  }
}
