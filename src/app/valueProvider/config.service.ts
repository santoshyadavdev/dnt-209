import { InjectionToken } from '@angular/core';
import { Config } from './config';
import { environment } from './../../environments/environment';

export const APP_CONFIG = new InjectionToken<Config>('appconfig');

export const APP_VALUE: Config = {
  jsonPlaceHolderApi: environment.jsonPlaceHolderApi
};
