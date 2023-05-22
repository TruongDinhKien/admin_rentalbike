import { AuthProvider } from 'react-admin'
import * as apis from '@/apis'
import { Auth } from '@/types.d'
import { storage } from './index'

const login = async (body: Auth.LoginRQ): Promise<boolean> => {
  try {
    await apis.signIn(body)
    return true
  } catch (error) {
    console.log('err', error)
    throw error
  }
}

const logout = async () => {
  await apis.logout()
  return Promise.resolve()
}

const checkError = (error: any) => {
  const status = error.status
  if (status === 401) {
    storage.remove('auth')
    return Promise.reject()
  }
  if (status === 403) {
    return Promise.reject({ redirectTo: '/unauthorized', logoutUser: false })
  }
  return Promise.resolve()
}

const checkAuth = (params: any) => {
  return storage.load('auth') ? Promise.resolve() : Promise.reject()
}

const getPermissions = (params: any) => {
  const permissions = {}
  return Promise.resolve(permissions)
}

const getIdentity = () => {
  const user = storage.load('auth')
  // console.log('check user --->', user)
  const identity = {
    id: user.id,
    email: user.email,
    fullName: user?.firstName + ' ' + user?.lastName,
  }
  return Promise.resolve(identity)
}

export const authProvider: AuthProvider = {
  login,
  logout,
  checkAuth,
  checkError,
  getPermissions,
  getIdentity,
}
