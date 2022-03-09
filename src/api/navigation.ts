import { httpRequest } from './index'
import { NavCardProps } from '@src/pages/navigation/components/navCard'
import { AxiosPromise } from 'axios'

export function getNavigationItems(): AxiosPromise<NavCardProps[]> {
  return httpRequest('/navigation')
}
