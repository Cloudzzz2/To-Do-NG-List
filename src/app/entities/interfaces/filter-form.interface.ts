import { LFilterForm } from "../labels/filter-form.label";

/**
 * Форма фильтрации
 * 
 * @property {number | null} PRIORITY_FILTER - фильтр по приоритету
 * @property {boolean | null} STATUS_ACTIVE - чекбокс, статус "активные"
 * @property {boolean | null} STATUS_CANCELED - чекбокс, статус "отмененный"
 * @property {boolean | null} STATUS_COMPLETED - чекбокс, статус "завершенные"
 * @property {number | null} DATE_SORT - сортировка по дате
 * @property {number | null} PRIORITY_SORT - сортировка по приоритету
 * @property {string | null} SEARCH - поле поиска задачи
 */
export interface IFilterForm {
    [LFilterForm.PRIORITY_FILTER]: number | null;
    [LFilterForm.STATUS_ACTIVE]: boolean | null;
    [LFilterForm.STATUS_CANCELED]: boolean  | null;
    [LFilterForm.STATUS_COMPLETED]: boolean | null;
    [LFilterForm.DATE_SORT]: number | null;
    [LFilterForm.PRIORITY_SORT]: number | null;
    [LFilterForm.SEARCH]: string | null;
}