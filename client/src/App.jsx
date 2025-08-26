import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import AppLayout from './components/layouts/AppLayout'
import AdminLayout from './components/layouts/AdminLayout';
import { lazy, Suspense } from 'react'
import { AuthProvider } from './api/AuthContext';
import Loading from './pages/Loading';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from "./components/ProtectedRoute";


const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const Logout = lazy(() => import('./pages/Logout'));
const Error = lazy(() => import('./components/UI/Error'))

const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const Users = lazy(() => import('./pages/admin/Users'));
const Contacts = lazy(() => import('./pages/admin/Contacts'));
const Service = lazy(() => import('./pages/admin/Service'));



const router = createBrowserRouter(
  createRoutesFromElements(
  <>

    <Route path="/" element={<AppLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path='services' element={<Services />} />
      <Route path='register' element={<Register />}/>
      <Route path='login' element={<Login />} />
      <Route path='logout' element={<Logout />} />
    </Route>


    <Route path='/admin' 
          element={ <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>} 
          errorElement={<Error />}>

      <Route index element={<Dashboard />} /> 
      <Route path='users' element={<Users />} />
       <Route path='services' element={<Service />} />
      <Route path='contacts' element={<Contacts />} />
    </Route>
  </>
))

const App = () => {

  return (
     <Suspense fallback={<Loading />}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <ToastContainer />
     </Suspense>
    
  )
}

export default App
