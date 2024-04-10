export interface IRegisterPayload {
    username: string;
    email: string;
    password: string;
    role: number;
    created_at: Date;
    updated_at: Date;
}

export interface ILoginPayload {
    username: string;
    password: string;
}