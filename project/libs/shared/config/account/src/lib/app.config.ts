import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';
import { validateConfig } from '@project/shared/helpers';
import { ValidateConfigErrorMessage } from '@project/libs/shared/app/types';

const DEFAULT_PORT = 3000;
const ENVIRONMENTS = ['development', 'production', 'stage'] as const;

type Environment = typeof ENVIRONMENTS[number];

export interface ApplicationConfig {
  environment: string;
  port: number;
}

const validationSchema = Joi.object({
  environment: Joi.string().valid(...ENVIRONMENTS).required(),
  port: Joi.number().port().default(DEFAULT_PORT),
});

function getConfig(): ApplicationConfig {
  const config: ApplicationConfig = {
    environment: process.env.NODE_ENV as Environment,
    port: parseInt(process.env.PORT || `${DEFAULT_PORT}`, 10),
  };

  validateConfig<ApplicationConfig>(config, validationSchema, ValidateConfigErrorMessage.ApplicationConfig);
  return config;
}

export default registerAs('application', getConfig);
