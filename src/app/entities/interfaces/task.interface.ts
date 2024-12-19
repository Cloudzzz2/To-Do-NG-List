import { LTask } from "../labels/task.label";

/**
 * Задача
 * 
 * @property {number | null} ID - айди задачи
 * @property {string} TEXT - текст задачи
 * @property {Date} DATE - дата создания задачи
 * @property {string} PRIORITY_TEXT - текстовое значение приоритета задачи
 * @property {number} PRIORITY - приоритет задачи
 * @property {number} STATUS - статус задачи
 * @template T - тип даты
 */
export interface ITask<T = Date> {
    [LTask.ID]: number | null;
    [LTask.TEXT]: string;
    [LTask.DATE]: T;
    [LTask.PRIORITY_TEXT]: string;
    [LTask.PRIORITY]: number;
    [LTask.STATUS]: number;
}
