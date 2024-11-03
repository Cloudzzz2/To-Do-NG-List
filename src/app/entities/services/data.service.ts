import { Injectable } from '@angular/core';
import { ITask } from '../interfaces/task.interface';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _tasks$$: BehaviorSubject<ITask[]> = new BehaviorSubject<ITask[]>([]);
  public tasks$: Observable<ITask[]> = this._tasks$$.asObservable();

  /**
   * Метод получения задач с сервера
   */
  public getTask(): void {
    fetch('http://127.0.0.1:3000/items', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
    })
    .then((response: Response) => response.json())
    .then((tasks: ITask[]) => {
      let tasksData: ITask[] = [];
      tasksData = tasks.map((task: ITask) => {
        return {
          ...task,
          taskDate: new Date(task.taskDate)
        };
      });
      this._tasks$$.next(tasksData);
    })
  }

  /**
   * Метод добавления задачи
   * 
   * @param {ITask} task - задача
   */
  public addTask(task: ITask): void {
    fetch('http://127.0.0.1:3000/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(task)
    })
    .then(() => this.getTask());
  };

  /**
   * Метод удаления задачи
   * 
   * @param {number} id - айди задачи
   */
  public deleteTask(id: number): void {
    fetch(`http://127.0.0.1:3000/items/${id}`, {
      method: 'DELETE',
    })
    .then(() => this.getTask());
  };

  /**
   * Метод обновления задачи
   * 
   * @param {ITask} task - задача
   */
  public refreshTask(task: ITask): void {
    fetch(`http://127.0.0.1:3000/items/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
       },
      body: JSON.stringify(task)
  })
  };
}
