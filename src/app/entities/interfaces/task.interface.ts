import { LTask } from "../labels/task.label";

/**
 * @property ID - айди задачи
 * @property TEXT - текст задачи
 * @property DATE - дата создания задачи
 * @property PRIORITY_TEXT - текстовое значение приоритета задачи
 * @property PRIORITY - приоритет задачи
 * @property STATUS - статус задачи
 */
export interface ITask {
    [LTask.ID]: number | null,
    [LTask.TEXT]: string,
    [LTask.DATE]: Date,
    [LTask.PRIORITY_TEXT]: string,
    [LTask.PRIORITY]: number,
    [LTask.STATUS]: number
}
