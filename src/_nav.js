import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilAnimal,
  cilDrop,
  cilPizza,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilBadge,
  cilHamburgerMenu,
  cilAsteriskCircle,
  cilFeaturedPlaylist,
  cilFindInPage,
  cilPhone,
  cilOpentype,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  /*   {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Theme',
  },
  {
    component: CNavItem,
    name: 'Colors',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Base',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/base/accordion',
      },
    ],
  }, */
  {
    component: CNavItem,
    name: 'Список услуг и цен',
    to: '/price-list',
    icon: <CIcon icon={cilPizza} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Контакты',
    to: '/contacts',
    icon: <CIcon icon={cilPhone} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Типы работ',
    to: '/types-list',
    icon: <CIcon icon={cilOpentype} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Документы',
    to: '/docs-editor',
    icon: <CIcon icon={cilFeaturedPlaylist} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Свиньи',
    to: './pigs-settings',
    icon: <CIcon icon={cilAsteriskCircle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Список страниц',
    to: '/pages-list',
    icon: <CIcon icon={cilFindInPage} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Меню футер',
    to: '/bottom-menu-list',
    icon: <CIcon icon={cilHamburgerMenu} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Поисковые фразы',
    to: '/search-phrases-list',
    icon: <CIcon icon={cilBadge} customClassName="nav-icon" />,
  },
  /*     {
    component: CNavTitle,
    name: 'Extras',
  }, */
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
    ],
  },
]

export default _nav
