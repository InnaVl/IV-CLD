export interface ITask {
    _id?: string;
    taskId: number|string;
    username: string;
    action: string;
    description?: string;
    priority: string;
    done?: boolean;
    date: string;
}
