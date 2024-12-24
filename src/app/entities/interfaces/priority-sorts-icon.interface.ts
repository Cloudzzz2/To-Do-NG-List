import { LIcon } from "../labels/icon.labels";
import { IPrioritySort } from "./priority-sorts.interface";

/**
 * Расширенные варианты сортировки
 * 
 * @property {string} ICON - значок/иконка
 * @extends IPrioritySort
 */

export interface IPrioritySortExtIcon extends IPrioritySort {
    [LIcon.ICON]: string;
}