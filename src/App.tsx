import { createBrowserHistory } from 'history'
import polyglotI18nProvider from 'ra-i18n-polyglot'
import { Admin, CustomRoutes, Resource } from 'react-admin'
import { Route } from 'react-router-dom'
import './App.css'
import { SignIn, SignUp } from './auth'

import { Dashboard } from './dashboard'
import { ForgetPassword } from './forgetpassword/ForgetPassword'
import { ResetPassword } from './forgetpassword/ResetPassword'
import vietnamMessages from './i18n/vi'
import englishMessages from './i18n/en'
import { MainLayout } from './layout/Layout'
import { authProvider, dataProvider } from './provider'
import { SkinGunCreate, SkinGunDetail, SkinGunList } from './skinguns'
import { SkinGunEdit } from './skinguns/SkinGunEdit'
import { lightTheme } from './themes'
import { UserDetail } from './users'
import { BikeList } from './pages/bikes'

const history = createBrowserHistory()

const i18nProvider = polyglotI18nProvider(locale => {
  if (locale === 'en') {
    return englishMessages
  }
  return vietnamMessages
}, 'vi')

const App = () => {
  return (
    <Admin
      authProvider={authProvider}
      title="Rentalbike admin"
      dashboard={Dashboard}
      history={history}
      dataProvider={dataProvider}
      loginPage={SignIn}
      layout={MainLayout}
      theme={lightTheme}
      i18nProvider={i18nProvider}
    >
      <CustomRoutes noLayout>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </CustomRoutes>
      <Resource name="bikes" list={BikeList} />
      <Resource name="users" show={UserDetail} />
      <Resource name="skinguns" list={SkinGunList} create={SkinGunCreate} show={SkinGunDetail} edit={SkinGunEdit} />
    </Admin>
  )
}

export default App
