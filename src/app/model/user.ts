export type User = {
    username: string;
    email: string;
    password: string;
};

export type UserEntitiy = {
    username: string;
    email: string;
    uentity: Array<entity>;
}

export type entity = {
    id: number;
    entityName: string;
}