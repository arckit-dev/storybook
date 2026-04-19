import i18next from 'i18next';
import type { ComponentType } from 'react';
import { TRANSLATION, type Namespace, type TranslationProps } from '@arckit/i18n';
import { I18nProvider } from '@arckit/i18n/client';
import { provide } from '@arckit/injection';

export const translation = <N extends Namespace>(
  lng: string,
  resources: Record<N, Record<string, unknown>>
): TranslationProps['t'] => {
  const namespaces = Object.keys(resources) as N[];
  const i18n = i18next.createInstance();
  i18n.init({
    lng,
    resources: {
      [lng]: resources
    },
    ...(namespaces[0] != null ? { defaultNS: namespaces[0] } : {})
  });
  return i18n.getFixedT(lng, namespaces);
};

export const withI18nProvider =
  <N extends Namespace>(lng: string, resources: Record<N, Record<string, unknown>>) =>
  (Story: ComponentType) => {
    const namespaces = Object.keys(resources) as N[];
    provide(TRANSLATION, translation(lng, resources));
    return (
      <I18nProvider locale={lng} namespaces={namespaces} resources={{ [lng]: resources }}>
        <Story />
      </I18nProvider>
    );
  };
