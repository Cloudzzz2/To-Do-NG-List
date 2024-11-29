import { LIcon } from "../labels/icon.labels";
import { IItem } from "./item.interface";

/**
 * Расширенные варианты сортировки
 * 
 * @property {string} ICON - значок/иконка
 * @extends IItem
 */
export interface IIconItem extends IItem {
    [LIcon.ICON]: string;
}