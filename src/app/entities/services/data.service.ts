import { inject, Injectable } from '@angular/core';
import { ITask } from '../interfaces/task.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly _http = inject(HttpClient);

  /**
   * Метод получения задач с сервера
   */
  public getTask(): Observable<ITask[]> {
    return this._http.get<ITask<string>[]>('http://127.0.0.1:3000/items').pipe(
      map((items: ITask<string>[]) => {
        return items.map((item: ITask<string>) => {
          return {
            ...item,
            taskDate: new Date(item.taskDate)
          }
        })
      })
    );
  }

  /**
   * Метод добавления задачи
   * 
   * @param {ITask} task - задача
   */
  public addTask(task: ITask): Observable<ITask> {
    return this._http.post<ITask>(`http://127.0.0.1:3000/items`, JSON.stringify(task), {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    });
  }

  /**
   * Метод удаления задачи
   * 
   * @param {number} id - айди задачи
   */
  public deleteTask(id: number): Observable<ITask> {
    return this._http.delete<ITask>(`http://127.0.0.1:3000/items/${id}`);
  }

  /**
   * Метод обновления задачи
   * 
   * @param {ITask} task - задача
   */
  public refreshTask(task: ITask): Observable<ITask> {
    return this._http.put<ITask>(`http://127.0.0.1:3000/items/${task.id}`, JSON.stringify(task), {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    });
  };
}
