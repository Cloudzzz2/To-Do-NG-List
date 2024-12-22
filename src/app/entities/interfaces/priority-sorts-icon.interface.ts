import { LIcon } from "../labels/icon.labels";
import { IPrioritySorts } from "./priority-sorts.interface";

/**
 * Расширенные варианты сортировки
 * 
 * @property {string} ICON - значок/иконка
 * @extends IPrioritySorts
 */

export interface IPrioritySortsExtIcon extends IPrioritySorts {
    [LIcon.ICON]: string;
}