

"use client";

import { I18nextProvider } from "react-i18next";
import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import { useMemo } from "react";

export default function TranslationsProvider({
  children,
  locale,
  resources,
  namespaces
}: {
  children: React.ReactNode;
  locale: string;
  resources: any;
  namespaces: string[];
}) {
  const i18n = useMemo(() => {
    const instance = createInstance();
    instance.use(initReactI18next).init({
      lng: locale,
      resources,
      fallbackLng: 'en',
      ns: namespaces,
      defaultNS: namespaces[0],
      interpolation: { escapeValue: false },
    });
    return instance;
  }, [locale, resources, namespaces]); // فقط يعيد init إذا تغير شيء

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
