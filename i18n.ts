// Can be imported from a shared config
export const locales = ['en', 'vi', 'ja'] as const;
export type Locale = typeof locales[number];

export const messages = {
  en: () => import('./app/locales/en.json').then(module => module.default),
  vi: () => import('./app/locales/vi.json').then(module => module.default),
  ja: () => import('./app/locales/ja.json').then(module => module.default),
}; 