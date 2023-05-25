import { ERole, Navigation } from './types';
import { urls } from '../../constants/urls';

import { ReactComponent as Monitoring } from '../../assets/images/monitoring.svg';
import { ReactComponent as Home } from '../../assets/images/home.svg';
import { ReactComponent as Analytics } from '../../assets/images/analytic.svg';

const getNavigationConfig = (): Navigation[] => {
  return [
    {
      text: 'Главная',
      link: `${urls.home}`,
      icon: <Home />,
    },
    {
      text: 'Мониторинг',
      link: `/${urls.chart}`,
      icon: <Monitoring />,
    },
    {
      text: 'Прогноз',
      link: `/${urls.analytics}`,
      icon: <Analytics />,
    },
  ];
};

export const useGetSectionsForHomePage = () => {
  const roleName = ERole.OPERATOR;

  switch (roleName) {
    case ERole.OPERATOR:
      return {
        navigationConfig: getNavigationConfig(),
      };
    default:
      return {
        navigationConfig: [],
      };
  }
};
