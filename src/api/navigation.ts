import { httpRequest } from '.'
import { NavCardProps } from '@src/pages/navigation/components/navCard'
import { AxiosPromise } from 'axios'

export interface NavigationData {
  code: number
  data: NavCardProps[]
}

export function getNavigationItems(): AxiosPromise<NavigationData> {
  return httpRequest('/navigation')
}
