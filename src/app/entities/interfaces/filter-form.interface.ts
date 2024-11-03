import { LFilterForm } from "../labels/filter-form.label";

/**
 * @property PRIORITY_FILTER - фильтр по приоритету
 * @property STATUS_ACTIVE - чекбокс, статус "активные"
 * @property STATUS_CANCELED - чекбокс, статус "отмененный"
 * @property STATUS_COMPLETED - чекбокс, статус "завершенные"
 * @property DATE_SORT - сортировка по дате
 * @property PRIORITY_SORT - сортировка по приоритету
 * @property SEARCH - поле поиска задачи
 */
export interface IFilterForm {
    [LFilterForm.PRIORITY_FILTER]: string,
    [LFilterForm.STATUS_ACTIVE]: boolean,
    [LFilterForm.STATUS_CANCELED]: boolean,
    [LFilterForm.STATUS_COMPLETED]: boolean,
    [LFilterForm.DATE_SORT]: number,
    [LFilterForm.PRIORITY_SORT]: number,
    [LFilterForm.SEARCH]: string
}