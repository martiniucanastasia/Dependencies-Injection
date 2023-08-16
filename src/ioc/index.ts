import IoCContainer from 'ioc-lite';
import { IoCContainer as IoCType } from './../types/index';

import { Logger } from '../services/logger';
import { HTTP } from '../services/http';
import { Users } from '../services/users';

export const createIoCContainer = () => {
  const ioc = new IoCContainer<IoCType>();

  ioc.registerClass('logger', Logger);
  ioc.registerClass('http', HTTP);
  ioc.registerClass('users', Users);
  
  return ioc;
};
