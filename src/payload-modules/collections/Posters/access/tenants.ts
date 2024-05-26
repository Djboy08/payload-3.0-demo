import type { Access } from 'payload/types'

import { isSuperAdmin } from '../../../utilities/isSuperAdmin'
import { Tenant, User } from '~/payload-types'

export const tenants: Access = ({ req: { user }, data }) =>
  // individual documents
  (data?.tenant?.id && (user?.lastLoggedInTenant as Tenant)?.id === data.tenant.id) ||
  (!(user?.lastLoggedInTenant as Tenant)?.id && isSuperAdmin(user as User)) || {
    // list of documents
    tenant: {
      equals: (user?.lastLoggedInTenant as Tenant)?.id,
    },
  }
