import * as Joi from 'joi';
import { ValidateConfigErrorMessage } from '@project/libs/shared/app/types';

export function validateConfig<T>(config: T, schema: Joi.ObjectSchema, validateConfigErrorMessage: ValidateConfigErrorMessage): void {
  const { error } = schema.validate(config, { abortEarly: true });
  if (error) {
    throw new Error(`[${validateConfigErrorMessage}]: ${error.message}`);
  }
}
