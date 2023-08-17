import { Logger } from 'src/services/logger';
import { HTTP } from 'src/services/http';
import { Users } from 'src/services/users';

export interface User {
  id: number;
  name: string;
}

export interface ApiConfig {
  path: string;
  resources: { [key: string]: string };
}

export type IoCContainer = {
  logger: typeof Logger;
  http: typeof HTTP;
  users: typeof Users;
  apiConfig: ApiConfig;
};