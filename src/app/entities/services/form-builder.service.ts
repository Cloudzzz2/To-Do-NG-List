import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AppLib } from '../libs/app.lib';
import { LFilterForm } from '../labels/filter-form.label';
import { LInputForm } from '../labels/input-form.label';
import { LIcon } from '../labels/icon.labels';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {
  private readonly _formBuilder: FormBuilder = inject(FormBuilder);

  public get inputForm() {
    return this._formBuilder.group({
      [LInputForm.PRIORITY]: this._formBuilder.control<number | null>(AppLib.priorityVariants[1][LIcon.VALUE]),
      [LInputForm.INPUT]: this._formBuilder.control<string | null>(null, [Validators.required, Validators.minLength(3)])
    });
  }

  public get filtersForm() {
    return this._formBuilder.group({
      [LFilterForm.PRIORITY_FILTER]: this._formBuilder.control<number | null>(AppLib.priorityFilterVariants[0].value),
      [LFilterForm.STATUS_ACTIVE]: this._formBuilder.control<boolean | null>(true),
      [LFilterForm.STATUS_CANCELED]: this._formBuilder.control<boolean | null>(true),
      [LFilterForm.STATUS_COMPLETED]: this._formBuilder.control<boolean | null>(true),
      [LFilterForm.DATE_SORT]: this._formBuilder.control<number | null>(AppLib.defaultDateSort),
      [LFilterForm.PRIORITY_SORT]: this._formBuilder.control<number | null>(AppLib.defaultPrioritySort),
      [LFilterForm.SEARCH]: this._formBuilder.control<string | null>(null, [Validators.required]),
    });
  }

  public get сontrol(): FormControl<null> {
    return this._formBuilder.control(null);
  }
}