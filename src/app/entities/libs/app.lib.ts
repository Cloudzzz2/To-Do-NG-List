import { EPriority } from "../enums/priority.enum";
import { ESort } from "../enums/sort.enum";
import { IIconItem } from "../interfaces/icon-item.interface";
import { IItem } from "../interfaces/item.interface";
import { LIcon } from "../labels/icon.labels";

export abstract class AppLib {
  /**
   * Значение приоритета по умолчанию
   */
  public static readonly defaultPriority: number = 1;

  /**
   * Значение статуса по умолчанию
   */
  public static readonly defaultStatus: number = 2;

  /**
   * Значение сортировки по приоритету по умолчанию
   */
  public static readonly defaultPrioritySort: number = 1;

  /**
   * Значение сортировки по дате по умолчанию
   */
  public static readonly defaultDateSort: number = 1;

  /**
   * Значения сортировки по дате
   * @property {number} VALUE - числовое значение сортировки
   * @property {string} TEXT - текст сортировки
   * @property {string} ICON - изображение(иконка) сортировки
   */
  public static readonly dateSortVariants: IIconItem[] = [
      {
        [LIcon.VALUE]: ESort.ASCENDING, 
        [LIcon.TEXT]: 'дата создания', 
        [LIcon.ICON]: 'arrowup'
      }, 
      {
        [LIcon.VALUE]: ESort.DESCENDING, 
        [LIcon.TEXT]: 'дата создания', 
        [LIcon.ICON]: 'arrowdown'
      }
    ];

  /**
   * Значения вариантов приоритета
   * @property {number} VALUE - числовое значение приоритета
   * @property {string} TEXT - текст сортировки
   */
  public static readonly priorityVariants: IItem[] = [
    {
      [LIcon.VALUE]: EPriority.LOW,
      [LIcon.TEXT]: 'низкий'
    },
    {
      [LIcon.VALUE]: EPriority.MEDIUM,
      [LIcon.TEXT]: 'средний'
    },
    {
      [LIcon.VALUE]: EPriority.HIGH,
      [LIcon.TEXT]: 'высокий'
    }
  ];

  /**
   * Значения фильтрации по приоритету
   * @property {number} VALUE - числовое значение варианта фильтрации
   * @property {string} TEXT - текст варианта фильтрации
   */
  public static readonly priorityFilterVariants: IItem[] = [
    {
      [LIcon.VALUE]: EPriority.ANY,
      [LIcon.TEXT]: 'любой'
    },
    {
      [LIcon.VALUE]: EPriority.LOW,
      [LIcon.TEXT]: 'низкий'
    },
    {
      [LIcon.VALUE]: EPriority.MEDIUM,
      [LIcon.TEXT]: 'средний'
    },
    {
      [LIcon.VALUE]: EPriority.HIGH,
      [LIcon.TEXT]: 'высокий'
    },
  ];

    /**
   * Значения сортировки по приоритету
   * @property {number} VALUE - числовое значение сортировки
   * @property {string} TEXT - текст сортировки
   * @property {string} ICON - изображение(иконка) сортировки
   */
  public static readonly prioritySortVariants: IIconItem[] = [
    {
      [LIcon.VALUE]: ESort.ASCENDING, 
      [LIcon.TEXT]: 'приоритет', 
      [LIcon.ICON]: 'arrowup'
    }, 
    {
      [LIcon.VALUE]: ESort.DESCENDING, 
      [LIcon.TEXT]: 'приоритет', 
      [LIcon.ICON]: 'arrowdown'
    }
  ];
}