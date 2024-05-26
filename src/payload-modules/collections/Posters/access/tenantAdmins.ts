import type { Access } from 'payload/config'

import { checkUserRoles } from '../../../utilities/checkUserRoles'
import { User } from '~/payload-types'

// the user must be an admin of the document's tenant
export const tenantAdmins: Access = ({ req: { user } }) => {
  if (checkUserRoles(['super-admin'], user as User)) {
    return true
  }

  return {
    tenant: {
      in:
        user?.tenants
          ?.map(
            ({
              tenant,
              roles,
            }: {
              tenant: NonNullable<User['tenants']>[0]['tenant']
              roles: NonNullable<User['tenants']>[0]['roles']
            }) =>
              roles.includes('admin') ? (typeof tenant === 'string' ? tenant : tenant.id) : null,
          ) // eslint-disable-line function-paren-newline
          .filter(Boolean) || [],
    },
  }
}
