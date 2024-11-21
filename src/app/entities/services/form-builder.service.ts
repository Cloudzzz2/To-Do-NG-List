import { inject, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppLib } from '../libs/app.lib';
import { LFilterForm } from '../labels/filter-form.label';
import { LInputForm } from '../labels/input-form.label';


@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {
  private readonly _formBuilder = inject(FormBuilder);

  /**
   * Форма для создания задачи
   * @param PRIORITY - приоритет задачи
   * @param INPUT - текстовое поле ввода
   */
  public inputForm = this._formBuilder.group({
    [LInputForm.PRIORITY]: this._formBuilder.control(AppLib.priorityVariants[1].value),
    [LInputForm.INPUT]: this._formBuilder.control('',[Validators.required, Validators.minLength(3)])
  });

  /**
   * Форма для создания задачи
   * @param PRIORITY_FILTER - приоритет задачи
   * @param STATUS_ACTIVE - чекбокс статуса "Активно"
   * @param STATUS_CANCELED - чекбокс статуса "Отменено"
   * @param STATUS_COMPLETED - чекбокс статуса "Завершено"
   * @param DATE_SORT - список сортировок по дате
   * @param PRIORITY_SORT - список сортировок по приоритету
   * @param SEARCH - текстовое поле ввода для поиска задачи
   */
  public filtersForm = this._formBuilder.nonNullable.group({
    [LFilterForm.PRIORITY_FILTER]: this._formBuilder.control(AppLib.priorityFilterVariants[0].value),
    [LFilterForm.STATUS_ACTIVE]: this._formBuilder.control(true),
    [LFilterForm.STATUS_CANCELED]: this._formBuilder.control(true),
    [LFilterForm.STATUS_COMPLETED]: this._formBuilder.control(true),
    [LFilterForm.DATE_SORT]: this._formBuilder.control(AppLib.defaultDateSort),
    [LFilterForm.PRIORITY_SORT]: this._formBuilder.control(AppLib.defaultPrioritySort),
    [LFilterForm.SEARCH]: this._formBuilder.control<string>('',[Validators.required]),
  });


}
