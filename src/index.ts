import IoCContainer from 'ioc-lite';
import { createIoCContainer } from './ioc';

import { Users } from './services/users';
import { Logger } from './services/logger';

import type { User, ApiConfig, IoCContainer as IoCType } from './types';

let ioc: IoCContainer<IoCType> = createIoCContainer();

const renderUsers = async (config: ApiConfig) => {
  const usersService: Users = ioc.resolve('users');
  const users = await usersService.getUsers();
  const listNode = document.getElementById('users-list');

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = () => {
  const config = (window as any).__CONFIG__;

  delete (window as any).__CONFIG__;

  ioc.register('apiConfig', config.api);

  renderUsers(config.api);
};

window.onload = (event: Event) => {
  const logger: Logger = ioc.resolve('logger');

  logger.info('Page is loaded.');

  app();
};
