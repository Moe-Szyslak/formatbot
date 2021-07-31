import { IFormatter } from './BaseFormatter';
import { PrettierFormatter } from './prettier/PrettierFormatter';

const formatters: Map<string, IFormatter> = new Map([
  ['prettier', new PrettierFormatter({ semi: true, parser: 'babel' })],
  ['prettier_ts', new PrettierFormatter({ semi: true, parser: 'babel-ts' })],
]);

export const languageMappings: Record<string, IFormatter> = {
  javascript: formatters.get('prettier'),
  jsx: formatters.get('prettier'),
  js: formatters.get('prettier'),
  typescript: formatters.get('prettier_ts'),
  tsx: formatters.get('prettier_ts'),
  ts: formatters.get('prettier_ts'),
};

export const languageNameMappings: Record<string, string> = {
  js: 'JavaScript',
  jsx: 'JavaScript',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  tsx: 'TypeScript',
  ts: 'TypeScript',
};
