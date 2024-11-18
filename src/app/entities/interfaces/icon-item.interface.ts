import { LIcon } from "../labels/icon.labels";
import { IItem } from "./item.interface";

/**
 * Расширенные варианты сортировки
 * 
 * @property {string} ICON - значок/иконка
 * @property {number} VALUE - значение сортировки
 * @property {string} TEXT - текст варианта сортировки
 */
export interface IIconItem extends IItem {
    [LIcon.ICON]: string
}