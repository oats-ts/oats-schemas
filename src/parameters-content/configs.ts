import { ParameterGeneratorConfig } from './typings'

export const configs: ParameterGeneratorConfig[] = [
  {
    location: 'path',
    requiredValues: [true],
    schemaTypes: [
      'string',
      'number',
      'boolean',
      'enum',
      'string-array',
      'number-array',
      'boolean-array',
      'enum-array',
      'object',
    ],
  },
  {
    location: 'query',
    requiredValues: [true, false],
    schemaTypes: [
      'string',
      'number',
      'boolean',
      'enum',
      'string-array',
      'number-array',
      'boolean-array',
      'enum-array',
      'object',
    ],
  },
  {
    location: 'header',
    requiredValues: [true, false],
    schemaTypes: [
      'string',
      'number',
      'boolean',
      'enum',
      'string-array',
      'number-array',
      'boolean-array',
      'enum-array',
      'object',
    ],
  },
  {
    location: 'cookie',
    requiredValues: [true, false],
    schemaTypes: [
      'string',
      'number',
      'boolean',
      'enum',
      'string-array',
      'number-array',
      'boolean-array',
      'enum-array',
      'object',
    ],
  },
]
