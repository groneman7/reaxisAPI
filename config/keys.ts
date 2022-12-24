import { ConnectOptions } from 'mongoose';

type Keys = {
    project: string;
    user: string;
    password: string;
    default: string;
    mongoOptions: ConnectOptions;
};

type MongoUri = string;

const keys: Keys = {
    project: 'reaxisedu.jzxyhdv.mongodb.net',
    user: 'admin',
    password: 'Q4VEcCwSUUNW8tw6',
    default: 'main',
    mongoOptions: {},
};

const mongoUri: MongoUri = `mongodb+srv://${keys.user}:${keys.password}@${keys.project}/${keys.default}?retryWrites=true&w=majority`;

export const Database = {
    mongoUri,
    ...keys,
};
