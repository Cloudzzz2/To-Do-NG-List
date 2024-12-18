import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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
   * @property PRIORITY - приоритет задачи
   * @property INPUT - текстовое поле ввода
   */
  public get inputForm() {
    return this._formBuilder.group({
      [LInputForm.PRIORITY]: this._formBuilder.control(AppLib.priorityVariants[1].value),
      [LInputForm.INPUT]: this._formBuilder.control('', [Validators.required, Validators.minLength(3)])
    });
  }

  /**
   * Форма для создания задачи
   * @property PRIORITY_FILTER - приоритет задачи
   * @property STATUS_ACTIVE - чекбокс статуса "Активно"
   * @property STATUS_CANCELED - чекбокс статуса "Отменено"
   * @property STATUS_COMPLETED - чекбокс статуса "Завершено"
   * @property DATE_SORT - список сортировок по дате
   * @property PRIORITY_SORT - список сортировок по приоритету
   * @property SEARCH - текстовое поле ввода для поиска задачи
   */
  public get filtersForm() {
    return this._formBuilder.group({
    [LFilterForm.PRIORITY_FILTER]: this._formBuilder.control(AppLib.priorityFilterVariants[0].value),
    [LFilterForm.STATUS_ACTIVE]: this._formBuilder.control(true),
    [LFilterForm.STATUS_CANCELED]: this._formBuilder.control(true),
    [LFilterForm.STATUS_COMPLETED]: this._formBuilder.control(true),
    [LFilterForm.DATE_SORT]: this._formBuilder.control(AppLib.defaultDateSort),
    [LFilterForm.PRIORITY_SORT]: this._formBuilder.control(AppLib.defaultPrioritySort),
    [LFilterForm.SEARCH]: this._formBuilder.control<string>('', [Validators.required]),
  });
  }

  /**
   * Метод создания пустого контрола
   */
  public get сontrol(): FormControl<number | null> {
    return this._formBuilder.control(null);
  }
  }