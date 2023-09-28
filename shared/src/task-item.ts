export interface TaskItem {
  _id?: string;
  task: string;
  status: string;
  created: string;
  modified?: Date;
}

export enum TaskStatus {
  todo = 'todo',
  doing = 'doing',
  done = 'done'
}
