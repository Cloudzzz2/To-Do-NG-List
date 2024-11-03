import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AppLib } from '../libs/app.lib';
import { LFilterForm } from '../labels/filter-form.label';
import { LInputForm } from '../labels/input-form.label';



@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {
  public inputForm = this.FormBuilder.group({
    [LInputForm.PRIORITY]: new FormControl(AppLib.priorityVariants[1].value),
    [LInputForm.INPUT]: new FormControl('',[Validators.required, Validators.minLength(3)])
  });

  public filtersForm = this.FormBuilder.nonNullable.group({
    [LFilterForm.PRIORITY_FILTER]: new FormControl(AppLib.priorityFilterVariants[0].value),
    [LFilterForm.STATUS_ACTIVE]: new FormControl(true),
    [LFilterForm.STATUS_CANCELED]: new FormControl(true),
    [LFilterForm.STATUS_COMPLETED]: new FormControl(true),
    [LFilterForm.DATE_SORT]: new FormControl(AppLib.defaultDateSort),
    [LFilterForm.PRIORITY_SORT]: new FormControl(AppLib.defaultPrioritySort),
    [LFilterForm.SEARCH]: new FormControl('',[Validators.required]),
  });

  constructor(
    private FormBuilder: FormBuilder
  ) {}
}
