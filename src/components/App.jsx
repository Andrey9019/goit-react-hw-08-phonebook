import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { useAuth } from './hooks';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import Login from './pages/Login';
import { Contacts } from './pages/Contacts';
import { Layout } from './Layout';


export const App = () => {
    const dispatch = useDispatch();
    const {isRefreshing} = useAuth()
    useEffect(() =>{dispatch(fetchContacts())},[dispatch])


  return (isRefreshing ? (<b>Refreshing user...</b>) : (
    <Routes>
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      <Route path="*" element={<div>NotFound</div>} />
      </Route>
     </Routes>) 
)
}
