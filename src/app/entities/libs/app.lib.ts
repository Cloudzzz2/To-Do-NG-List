import { ESort } from "../enums/sort.enum";

export abstract class AppLib {
    public static readonly defaultPriority: number = 1;

    public static readonly defaultStatus: number = 2;
    
    public static readonly defaultPrioritySort: number = 1;
    public static readonly defaultDateSort: number = 1;

    public static readonly dateSortVariants = [
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
      public static readonly priorityVariants = [
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
      public static readonly priorityFilterVariants = [
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
      public static readonly prioritySortVariants = [
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