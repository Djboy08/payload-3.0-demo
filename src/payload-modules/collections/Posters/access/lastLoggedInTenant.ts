import type { Access } from 'payload/types'
import { Tenant } from '~/payload-types'

export const lastLoggedInTenant: Access = ({ req: { user }, data }) =>
  (user?.lastLoggedInTenant as Tenant)?.id === data?.id
