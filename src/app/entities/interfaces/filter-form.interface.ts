import { LFilterForm } from "../labels/filter-form.label";

/**
 * Форма фильтрации
 * 
 * @property {string} PRIORITY_FILTER - фильтр по приоритету
 * @property {boolean} STATUS_ACTIVE - чекбокс, статус "активные"
 * @property {boolean} STATUS_CANCELED - чекбокс, статус "отмененный"
 * @property {boolean} STATUS_COMPLETED - чекбокс, статус "завершенные"
 * @property {number} DATE_SORT - сортировка по дате
 * @property {number} PRIORITY_SORT - сортировка по приоритету
 * @property {string} SEARCH - поле поиска задачи
 */
export interface IFilterForm {
    [LFilterForm.PRIORITY_FILTER]: number;
    [LFilterForm.STATUS_ACTIVE]: boolean;
    [LFilterForm.STATUS_CANCELED]: boolean;
    [LFilterForm.STATUS_COMPLETED]: boolean;
    [LFilterForm.DATE_SORT]: number;
    [LFilterForm.PRIORITY_SORT]: number;
    [LFilterForm.SEARCH]: string;
}