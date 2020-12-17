import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'clock-outline',
    link: '/iprod/dashboardlive',
  },
  {
    title: 'Dashboard Historical',
    icon: 'corner-down-right-outline',
    link: '/iprod/DashboardHistorical',
  },
  {
    title: 'Dashboard Consolidated',
    icon: 'flip-2-outline',
    link: '/iprod/DashboardConsolidated',
  },
  {
    title: 'Customer Feedback',
    icon: 'file-text-outline',
    link: '/iprod/CustomerFeedback',
  },
  /*{
    title: 'Batch',
    icon: 'plus-outline',
    link: '/iprod/batch',
  },
  {
    title: 'Users',
    icon: 'person-add-outline',
    link: '/iprod/users',
  },
  {
    title: 'Reports',
    icon: 'file-text-outline',
    children: [
      {
        title: 'Short Report',
        link: '/iprod/report/short',
      },
      {
        title: 'Detailed Report',
        link: '/iprod/report/detailed',
      }]
  },*/
  {
    title: 'Logout',
    icon: 'log-out',
    link: '/iprod/logout'
  }
];
