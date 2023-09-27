export interface TaskItem {
  _id?: string;
  task: string;
  status: string;
  created: string;
  modified?: Date;
}

enum TaskStatus {
  todo = 'todo',
  doing = 'doing',
  done = 'done'
}
