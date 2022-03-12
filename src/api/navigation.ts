import { httpRequest } from '.'
import { NavCardProps } from '@src/pages/navigation/components/navCard'
import { AxiosPromise } from 'axios'

export function getNavigationItems(): AxiosPromise<NavCardProps[]> {
  return httpRequest('/navigation')
}
