import { Component } from '@angular/core';
import { FormBuilderService } from '../../../../../services/form-builder.service';
import { FormGroup } from '@angular/forms';
import { AppLib } from 'src/app/entities/libs/app.lib';

@Component({
  selector: 'app-filter-task',
  templateUrl: './filter-task.component.html',
  styleUrls: ['./filter-task.component.scss']
})
export class FilterTaskComponent {
  public filtersForm: FormGroup = this._formBuilderService.filtersForm;
  public priorityFilter = AppLib.priorityFilterVariants;
  public prioritySelect = AppLib.priorityVariants;
  public dateSelect = AppLib.dateSortVariants;
  public prioritySortSelect = AppLib.prioritySortVariants; 

  constructor(
    private _formBuilderService: FormBuilderService,
  ) {}
}
