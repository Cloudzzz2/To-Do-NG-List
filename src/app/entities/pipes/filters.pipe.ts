import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from '../interfaces/task.interface';
import { AppLib } from '../libs/app.lib';
import { EPriority } from '../enums/priority.enum';
import { EStatus } from '../enums/status.enum';

@Pipe({
  pure: false, 
  name: 'filters'
})

export class FiltersPipe implements PipeTransform {

  /**
   * Фильтрация и сортировка задач
   * @param {ITask[]} items - задачи
   * @param {IFilterForm} filtersFormValue - значения формы фильтрации
   * @returns
   * 
   */
  public transform(items:ITask[], filtersFormValue: any): ITask[] {
    switch (filtersFormValue.priorityFilter) {
      // Фильтр по приоритету
      case (1): {
        items = items.filter((item: ITask) => item.taskPriorityValue === EPriority.LOW);
        break;
      }
      case (2): {
        items = items.filter((item: ITask) => item.taskPriorityValue === EPriority.MEDIUM);
        break;
      }
      case (3): {
        items = items.filter((item: ITask) => item.taskPriorityValue === EPriority.HIGH);
        break;
      }
    }

    // Фильтр по статусу
    if (!filtersFormValue.statusFilterActive) {
      items = items.filter((item: ITask) => item.status !== EStatus.ACTIVE);
    }
    if (!filtersFormValue.statusFilterCanceled) {
      items = items.filter((item: ITask) => item.status !== EStatus.CANCELED);
    }
    if (!filtersFormValue.statusFilterCompleted) {
      items = items.filter((item: ITask) => item.status !== EStatus.COMPLETED);
    }

    // Сортировка по дате
    if (filtersFormValue.dateSort === AppLib.defaultDateSort) {
      items = items.sort((a: ITask, b: ITask) => Number(a.taskDate) - Number(b.taskDate))
    } else {
      items = items.sort((a: ITask, b: ITask) => Number(b.taskDate) - Number(a.taskDate))
    }

    // Сортировка по приоритету
    if (filtersFormValue.prioritySort === AppLib.defaultPrioritySort) {
      items = items.sort((a: ITask, b: ITask) => b.taskPriorityValue - a.taskPriorityValue)
    } else {
      items = items.sort((a: ITask, b: ITask) => a.taskPriorityValue - b.taskPriorityValue)
    }

    // Поиск задачи по тексту
    if (filtersFormValue.searchField.length >= 3) {
      items = items.filter((item: ITask) => item.taskText.toLowerCase().includes(filtersFormValue.searchField.toLowerCase()));
    }
    return items;
  }
}
