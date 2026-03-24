

import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';

export default async function initI18next(lng: string, ns: string) {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`@/public/locales/${language}/${namespace}.json`)
      )
    )
   .init({
    lng,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    ns,
    defaultNS: ns,
});
  return i18nInstance;
}