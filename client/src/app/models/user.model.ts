export interface User {
    _id?: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    usersTasks?: [number | string];
}

export interface Credentials {
    username: string;
    password: string;
}