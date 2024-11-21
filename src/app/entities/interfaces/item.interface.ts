import { LIcon } from "../labels/icon.labels";

/**
 * Варианты сортировки
 * 
 * @property {number} VALUE - значение сортировки
 * @property {string} TEXT - текст варианта сортировки
*/
export interface IItem {
    [LIcon.VALUE]: number,
    [LIcon.TEXT]: string
}