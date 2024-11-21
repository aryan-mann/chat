import { useTranslation } from 'react-i18next';

export const useGreeting = () => {
  const { t } = useTranslation('welcome');
  return t(`guide.welcome`);
};
