import { ESort } from "../enums/sort.enum";
import { IIconItem } from "../interfaces/icon-item.interface";
import { IItem } from "../interfaces/item.interface";

export abstract class AppLib {
    public static readonly defaultPriority: number = 1;

    public static readonly defaultStatus: number = 2;
    
    public static readonly defaultPrioritySort: number = 1;
    
    public static readonly defaultDateSort: number = 1;

    public static readonly dateSortVariants: IIconItem[] = [
        {
          value: ESort.ASCENDING, 
          text: 'дата создания', 
          icon: 'arrowup'
        }, 
        {
          value: ESort.DESCENDING, 
          text: 'дата создания', 
          icon: 'arrowdown'
        }
      ];
      public static readonly priorityVariants: IItem[] = [
        {
          value: 1,
          text: 'низкий'
        },
        {
          value: 2,
          text: 'средний'
        },
        {
          value: 3,
          text: 'высокий'
        }
      ];

      public static readonly priorityFilterVariants: IItem[] = [
        {
          value: 0,
          text: 'любой'
        },
        {
          value: 1,
          text: 'низкий'
        },
        {
          value: 2,
          text: 'средний'
        },
        {
          value: 3,
          text: 'высокий'
        },
      ];
      public static readonly prioritySortVariants: IIconItem[] = [
        {
          value: ESort.ASCENDING, 
          text: 'приоритет', 
          icon: 'arrowup'
        }, 
        {
          value: ESort.DESCENDING, 
          text: 'приоритет', 
          icon: 'arrowdown'
        }
      ];
}