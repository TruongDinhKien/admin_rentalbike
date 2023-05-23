import { createBrowserHistory } from 'history'
import polyglotI18nProvider from 'ra-i18n-polyglot'
import { Admin, CustomRoutes, Resource } from 'react-admin'
import { Route } from 'react-router-dom'
import './App.css'
import { SignIn, SignUp } from './auth'

import { Dashboard } from './pages/dashboard'
import { ForgetPassword } from './forgetpassword/ForgetPassword'
import { ResetPassword } from './forgetpassword/ResetPassword'
import vietnamMessages from './i18n/vi'
import englishMessages from './i18n/en'
import { MainLayout } from './layout/Layout'
import { authProvider, dataProvider } from './provider'
import { lightTheme } from './themes'
import { UserDetail } from './users'
import { BikeList, BikeCreate, BikeEdit } from './pages/bikes'
import { UserList, UserCreate, UserEdit } from './pages/users'
import { RentalList } from './pages/rental'

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
      dataProvider={dataProvider}
      title="Rentalbike admin"
      dashboard={Dashboard}
      history={history}
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
      <Resource name="users" edit={UserEdit} list={UserList} create={UserCreate}/>
      <Resource name="bikes" list={BikeList} create={BikeCreate} edit={BikeEdit} />
      <Resource name="rentals" list={RentalList} />
    </Admin>
  )
}

export default App
