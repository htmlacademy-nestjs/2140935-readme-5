import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';
import { validateConfig } from '@project/shared/helpers';
import { ValidateConfigErrorMessage } from '@project/libs/shared/app/types';

const DEFAULT_RABBIT_PORT = 5672;

export interface RabbitConfig {
  host: string;
  password: string;
  user: string;
  queue: string;
  exchange: string;
  port: number;
}

const validationSchema = Joi.object({
  host: Joi.string().valid().hostname().required(),
  password: Joi.string().required(),
  port: Joi.number().port().default(DEFAULT_RABBIT_PORT),
  user: Joi.string().required(),
  queue: Joi.string().required(),
  exchange: Joi.string().required(),
});

function getConfig(): RabbitConfig {
  const config: RabbitConfig = {
    host: process.env.RABBIT_HOST,
    password: process.env.RABBIT_PASSWORD,
    port: parseInt(process.env.RABBIT_PORT ?? DEFAULT_RABBIT_PORT.toString(), 10),
    user: process.env.RABBIT_USER,
    queue: process.env.RABBIT_QUEUE,
    exchange: process.env.RABBIT_EXCHANGE,
  };

  validateConfig<RabbitConfig>(config, validationSchema, ValidateConfigErrorMessage.RabbitConfig);
  return config;
}

export default registerAs('rabbit', getConfig);
