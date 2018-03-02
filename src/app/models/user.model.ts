export interface User {
    userId?: number;
    firstName: string;
    lastName: string;
    username: string;
    password?: string;
    email: string;
    balance: number;
    roleId: number;
}