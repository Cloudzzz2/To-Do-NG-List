import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from '../interfaces/task.interface';
import { AppLib } from '../libs/app.lib';
import { EPriority } from '../enums/priority.enum';
import { EStatus } from '../enums/status.enum';
import { IFilterForm } from '../interfaces/filter-form.interface';
import { LTask } from '../labels/task.label';
import { LFilterForm } from '../labels/filter-form.label';

@Pipe({
  standalone: true,
  pure: false, 
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {
  /**
   * Фильтрация и сортировка задач
   * @param {ITask[]} items - задачи
   * @param {IFilterForm | null} filtersFormValue - значения формы фильтрации
   * @returns
   * 
   */
  public transform(items:ITask[], filtersFormValue: IFilterForm | null): ITask[] {
    if (filtersFormValue === null) {
      items = items.sort((a: ITask, b: ITask) => b[LTask.PRIORITY] - a[LTask.PRIORITY]);
      return items;
    }
    switch (filtersFormValue[LFilterForm.PRIORITY_FILTER]) {
      // Фильтр по приоритету
      case (EPriority.LOW): {
        items = items.filter((item: ITask) => item[LTask.PRIORITY] === EPriority.LOW);
        break;
      }
      case (EPriority.MEDIUM): {
        items = items.filter((item: ITask) => item[LTask.PRIORITY] === EPriority.MEDIUM);
        break;
      }
      case (EPriority.HIGH): {
        items = items.filter((item: ITask) => item[LTask.PRIORITY] === EPriority.HIGH);
        break;
      }
    }

    // Фильтр по статусу
    if (!filtersFormValue[LFilterForm.STATUS_ACTIVE]) {
      items = items.filter((item: ITask) => item[LTask.STATUS] !== EStatus.ACTIVE);
    }
    if (!filtersFormValue[LFilterForm.STATUS_CANCELED]) {
      items = items.filter((item: ITask) => item[LTask.STATUS] !== EStatus.CANCELED);
    }
    if (!filtersFormValue[LFilterForm.STATUS_COMPLETED]) {
      items = items.filter((item: ITask) => item[LTask.STATUS] !== EStatus.COMPLETED);
    }

    // Сортировка по дате
    if (filtersFormValue[LFilterForm.DATE_SORT] === AppLib.defaultDateSort) {
      items = items.sort((a: ITask, b: ITask) => Number(a[LTask.DATE]) - Number(b[LTask.DATE]));
    } else {
      items = items.sort((a: ITask, b: ITask) => Number(b[LTask.DATE]) - Number(a[LTask.DATE]));
    }

    // Сортировка по приоритету
    if (filtersFormValue[LFilterForm.PRIORITY_SORT] === AppLib.defaultPrioritySort) {
      items = items.sort((a: ITask, b: ITask) => b[LTask.PRIORITY] - a[LTask.PRIORITY]);
    } else {
      items = items.sort((a: ITask, b: ITask) => a[LTask.PRIORITY] - b[LTask.PRIORITY]);
    }

    // Поиск задачи по тексту
    if (filtersFormValue[LFilterForm.SEARCH] && filtersFormValue[LFilterForm.SEARCH].length >= 3) {
      items = items.filter((item: ITask) => item[LTask.TEXT].toLowerCase().includes(filtersFormValue[LFilterForm.SEARCH]!.toLowerCase()));
    }
    return items;
  }
}
