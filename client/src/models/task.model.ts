export interface ITask {
    _id?: string;
    action: string;
    description?:string;
    priority:number;
    done?:boolean;
}