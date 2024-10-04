import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LoginPage from './Pages/LoginPage'
import ErrorPage from './Pages/ErrorPage'
import RegisterPage from './Pages/RegisterPage'
import database from './firebase.config'
import ResetPassword from './Components/ResetPassword/ResetPassword'
import HomePage from './Pages/HomePage'
import LayoutOne from './Layouts/LayoutOne'
import Chat from './Components/Chat/ChatCompo'
import Friend from './Components/Friend/Friend'
import Setting from './Components/Setting/Setting'
import Users from './Components/Users/Users'
import Friends from './Components/Friends/Friends'
import Notifications from './Pages/Notifications'
import Blocked from './Pages/Blocked'
import Messege from './Pages/Messege'
import People from './Pages/People'

database

function App() {

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element = {<LayoutOne/>} >
           <Route index element = {< HomePage />} />
           <Route path='/chat' element = {< Chat />} />
           <Route path='/users' element = {< Users />} />
           <Route path='/friendRequest' element = {< Friend />} />
           <Route path='/friends' element = {< Friends />} />
           <Route path='/blocked' element = {< Blocked />} />
           <Route path='/messege' element = {< Messege />} />
           <Route path='/people' element = {< People />} />

           <Route path='/notifications' element = {< Notifications />} />
           <Route path='/setting' element = {< Setting />} />
        </Route>
        <Route path='/login' element = {< LoginPage />} />
        <Route path='/register' element = {< RegisterPage />} />
        <Route path='/resetpassword' element = {< ResetPassword />} />
        <Route path='*' element = {< ErrorPage />} />
      </Route>
    )
  )
  

  return (
    <>

    <RouterProvider router={route}/>

    </>
  )
}

export default App
