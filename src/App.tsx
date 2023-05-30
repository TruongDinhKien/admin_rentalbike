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
import { BikeList, BikeCreate, BikeEdit } from './pages/bikes'
import { UserList, UserCreate, UserEdit } from './pages/users'
import { RentalCreate, RentalEdit, RentalList } from './pages/rental'
import { lightTheme } from './custom-themes'
import { BikeStatusCreate, BikeStatusList } from './pages/status'
import { IntlProvider } from 'react-intl'
import { RevenueList } from './pages/revenue'

const translations: any = { en: englishMessages, vi: vietnamMessages }
const history = createBrowserHistory()

export const i18nProvider = polyglotI18nProvider(
  locale => translations[locale],
  'en', // default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'vi', name: 'VietNam' },
  ],
)

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
      i18nProvider={i18nProvider}
      theme={lightTheme}
    >
      <CustomRoutes noLayout>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </CustomRoutes>
      <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit} />
      <Resource name="bikes" list={BikeList} create={BikeCreate} edit={BikeEdit} />
      <Resource name="bikestatuses" list={BikeStatusList} create={BikeStatusCreate} />
      <Resource name="rentals" list={RentalList} create={RentalCreate} edit={RentalEdit} />
      <Resource name="revenues" list={RevenueList} />
    </Admin>
  )
}

export default App
