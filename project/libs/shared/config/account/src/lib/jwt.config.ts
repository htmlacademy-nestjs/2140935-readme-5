import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';
import { validateConfig } from '@project/shared/helpers';
import { ValidateConfigErrorMessage } from '@project/libs/shared/app/types';

export interface JWTConfig {
  accessTokenSecret: string;
  accessTokenExpiresIn: string;
  refreshTokenSecret: string;
  refreshTokenExpiresIn: string;
}

const validationSchema = Joi.object({
  accessTokenSecret: Joi.string().required(),
  accessTokenExpiresIn: Joi.string().required(),
  refreshTokenSecret: Joi.string().required(),
  refreshTokenExpiresIn: Joi.string().required(),
});

function getConfig(): JWTConfig {
  const config: JWTConfig = {
    accessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    accessTokenExpiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN,
    refreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
    refreshTokenExpiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN,
  };

  validateConfig<JWTConfig>(config, validationSchema, ValidateConfigErrorMessage.JWTConfig);
  return config;
}

export default registerAs('jwt', getConfig);
